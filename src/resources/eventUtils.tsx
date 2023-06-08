import { ControlZone, Site, View } from "./locationUtils";

export interface Participant {
  side: number;
  faction: string;
}

export interface EventImpact {
  faction: string;
  delta: number; // [-3, 3]
}

export interface LogEvent {
  date: Date;
  location: string;
  players: Participant[];
  impacts: EventImpact[];
}

export interface ScenarioEvent {
  title: string;
  date: Date;
  bannerImg?: React.ReactNode;
  description: string;
  description2?: string;
  endImages?: React.ReactNode;
  view?: View;
  location?: string;
}

const getUpdatedZoneFactions = (
  factions: { name: string; control: number }[],
  impacts: EventImpact[]
) => {
  var updatedFactions: { name: string; control: number }[] =
    structuredClone(factions);
  const impactsClone: EventImpact[] = structuredClone(impacts);

  // follow up functions because of ascending order
  const sortedImpacts = impactsClone.sort((a, b) => a.delta - b.delta);
  sortedImpacts.forEach((impact) => {
    const targetFaction = updatedFactions.find(
      (faction) => faction.name === impact.faction
    );

    if (targetFaction) {
      // if delta takes control to non-positive, remove it
      if (targetFaction?.control + impact.delta <= 0) {
        updatedFactions = updatedFactions.filter(
          (faction) => faction.name !== targetFaction.name
        );

        // if delta takes takes control to 3 or above,
      } else if (targetFaction.control + impact.delta > 3) {
        // drop any other factions to 2
        updatedFactions.forEach(
          (faction) =>
            (faction.control = faction.control === 3 ? 2 : faction.control)
        );

        // set it to 3
        targetFaction.control = 3;

        // else apply delta
      } else {
        targetFaction.control = targetFaction.control + impact.delta;
      }

      // if faction isn't included and it has positive delta, add it
    } else if (impact.delta > 0) {
      // if delta takes control to 3 or above,
      if (impact.delta >= 3) {
        // drop any other factions to 2
        updatedFactions.forEach(
          (faction) =>
            (faction.control = faction.control === 3 ? 2 : faction.control)
        );
      }

      // set control, max 3
      // add it
      updatedFactions.push({
        name: impact.faction,
        control: impact.delta < 3 ? impact.delta : 3,
      });
    }
  });

  return updatedFactions;
};

export const getZoneStates = (
  controlZones: { [id: string]: ControlZone },
  events: LogEvent[]
) => {
  var updatedZones = structuredClone(controlZones);
  events.forEach((event) => {
    const zone = updatedZones[event.location];

    if (zone) {
      updatedZones[event.location] = {
        ...zone,
        factions: getUpdatedZoneFactions(zone.factions || [], event.impacts),
      };
    } else {
      console.log("Events: Location not found");
    }
  });
  return updatedZones;
};

export const getUpdatedSiteStatus = (
  sites: { [id: string]: Site },
  updatedControlZones: {
    [id: string]: ControlZone;
  }
): { [id: string]: Site } => {
  var updatedSites: { [id: string]: Site } = structuredClone(sites);

  // for each site
  Object.keys(updatedSites).forEach((siteId) => {
    var newFactions = new Set<string>();
    const controlCounts: Record<string, number> = {};

    const controlZoneIds = updatedSites[siteId].controlZones;
    controlZoneIds?.forEach((zoneId) => {
      const zone = updatedControlZones[zoneId];
      zone.factions.forEach((faction) => {
        // find all unique factions
        newFactions.add(faction.name);
        // count instances of faction having 3 control in a zone
        // zone control 0-3
        // only one faction should have control level 3
        if (faction.control === 3) {
          controlCounts[faction.name] = controlCounts[faction.name]
            ? controlCounts[faction.name] + 1
            : 1;
        }
      });
    });

    // who has most is controllingFaction
    const highestCount = Math.max(...Object.values(controlCounts));
    const controllingFaction = Object.keys(controlCounts).find(
      (factionId) => controlCounts[factionId] === highestCount
    );

    // add unique factions
    // add controllingFaction
    updatedSites[siteId] = {
      ...sites[siteId], // attn, shallow copy
      factions: Array.from(newFactions),
      controllingFaction: controllingFaction,
    };
  });

  return updatedSites;
};

export const getLogEvents: LogEvent[] = [
  {
    date: new Date("2023-05-28"),
    location: "davis.digsite",
    players: [
      { side: 1, faction: "Nightsong" },
      { side: 2, faction: "The Davis Boys" },
    ],
    impacts: [
      { faction: "The Davis Boys", delta: -1 },
      { faction: "Nightsong", delta: 1 },
    ],
  },
  {
    date: new Date("2023-05-27"),
    location: "davis.logging",
    players: [
      { side: 1, faction: "Nightsong" },
      { side: 2, faction: "The Davis Boys" },
    ],
    impacts: [
      { faction: "The Davis Boys", delta: -3 },
      { faction: "Nightsong", delta: 3 },
    ],
  },
];
