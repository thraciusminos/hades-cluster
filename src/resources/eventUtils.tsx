import { ControlZone, Site, View } from "./locationUtils";

export interface Participant {
  side: number;
  faction: string;
}

export interface EventImpact {
  location: string;
  faction: string;
  delta: number;
}

export interface LogEvent {
  date: Date;
  players: Participant[];
  impact: EventImpact;
}

export interface ScenarioEvent {
  title: string;
  bannerImg?: React.ReactNode;
  description: string;
  description2?: string;
  endImages?: React.ReactNode;
  view?: View;
  location?: string;
}

const getUpdatedZoneFactions = (
  factions: { name: string; control: number }[],
  impact: EventImpact
) => {
  const updatedFactions: { name: string; control: number }[] = factions.map(
    (faction) =>
      faction.name === impact.faction
        ? { name: faction.name, control: faction.control + impact.delta }
        : faction
  );

  return updatedFactions;
};

export const getCurrentSituation = (
  initialSituation: { [id: string]: ControlZone },
  events: LogEvent[]
) => {
  var currentSituation = initialSituation;
  events.forEach((event) => {
    const loc = initialSituation[event.impact.location];

    if (loc) {
      currentSituation[event.impact.location] = {
        ...loc,
        factions: getUpdatedZoneFactions(loc.factions || [], event.impact),
      };
    } else {
      console.log("Events: Location not found");
    }
  });
  return currentSituation;
};

export const getUpdatedSiteStatus = (
  sites: { [id: string]: Site },
  updatedControlZones: {
    [id: string]: ControlZone;
  }
): { [id: string]: Site } => {
  var updatedSites = sites;

  // for each site,
  // find all unique factions
  // add under factions

  // count instances of faction having 3 control in a zone
  // zone control 0-3
  // only one faction should have control level 3
  // who has most is controllingFaction
  // add under controllingFaction

  Object.keys(sites).forEach((siteId) => {
    var newFactions = new Set<string>();
    const controlCounts: Record<string, number> = {};

    const controlZoneIds = sites[siteId].controlZones;
    controlZoneIds?.forEach((zoneId) => {
      const zone = updatedControlZones[zoneId];
      zone.factions.forEach((faction) => {
        // find all unique factions
        newFactions.add(faction.name);
        // count instances of faction having 3 control in a zone
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

    // add under factions
    // add under controllingFaction
    updatedSites[siteId] = {
      ...sites[siteId],
      factions: Array.from(newFactions),
      controllingFaction: controllingFaction,
    };
  });

  return updatedSites;
};

export const getLogEvents: LogEvent[] = [
  {
    date: new Date("2023-03-10"),
    players: [
      { side: 1, faction: "Imperium" },
      { side: 2, faction: "Eldar Corsairs" },
    ],
    impact: { location: "sunkenTemples", faction: "Imperium", delta: 20 },
  },
  {
    date: new Date("2023-03-10"),
    players: [
      { side: 1, faction: "Imperium" },
      { side: 2, faction: "Eldar Corsairs" },
    ],
    impact: { location: "sunkenTemples", faction: "Imperium", delta: 20 },
  },
  {
    date: new Date("2023-03-10"),
    players: [
      { side: 1, faction: "Imperium" },
      { side: 2, faction: "Eldar Corsairs" },
    ],
    impact: { location: "sunkenTemples", faction: "Imperium", delta: 20 },
  },
];
