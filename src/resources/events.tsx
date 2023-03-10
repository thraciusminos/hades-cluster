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

export const events: ScenarioEvent[] = [
  {
    date: new Date("2023-03-10"),
    players: [
      { side: 1, faction: "Imperium" },
      { side: 2, faction: "Eldar Corsairs" },
    ],
    impact: { location: "sunkenTemples", faction: "Imperium", delta: 20 },
  },
];
