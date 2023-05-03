import { Sector } from "./locationUtils";

export interface Participant {
  side: number;
  faction: string;
}

export interface EventImpact {
  location: string;
  faction: string;
  delta: number;
}

export interface ScenarioEvent {
  date: Date;
  players: Participant[];
  impact: EventImpact;
}

const updateLocFactions = (
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
  initialSituation: { [id: string]: Sector },
  events: ScenarioEvent[]
) => {
  var currentSituation = initialSituation;
  events.forEach((event) => {
    const loc = initialSituation[event.impact.location];

    if (loc) {
      currentSituation[event.impact.location] = {
        ...loc,
        factions: updateLocFactions(loc.factions || [], event.impact),
      };
    } else {
      console.log("Events: Location not found");
    }
  });
  return currentSituation;
};

export const getEvents: ScenarioEvent[] = [
  {
    date: new Date("2023-03-10"),
    players: [
      { side: 1, faction: "Imperium" },
      { side: 2, faction: "Eldar Corsairs" },
    ],
    impact: { location: "sunkenTemples", faction: "Imperium", delta: 20 },
  },
];
