import { LogEvent } from "../eventUtils";

export const getLogEvents: LogEvent[] = [
  {
    date: new Date("2023-07-26"),
    location: "davis.habs-north",
    players: [
      { side: 1, faction: "Respitean Defence Forces" },
      { side: 1, faction: "Ultramarines Detachment" },
      { side: 2, faction: "Ork Warband" },
      { side: 2, faction: "Templars Detachment" },
    ],
    impacts: [
      { faction: "Respitean Defence Forces", delta: 2 },
      { faction: "Ultramarines Detachment", delta: 2 },
      { faction: "Ork Warband", delta: -2 },
      { faction: "Templars Detachment", delta: -2 },
    ],
  },
  {
    date: new Date("2023-07-20"),
    location: "davis.aquacology",
    players: [
      { side: 1, faction: "Respitean Defence Forces" },
      { side: 2, faction: "Heretic Astartes Warband" },
    ],
    impacts: [
      { faction: "Respitean Defence Forces", delta: 2 },
      { faction: "Heretic Astartes Warband", delta: -2 },
    ],
  },
  {
    date: new Date("2023-07-16"),
    location: "davis.digsite",
    players: [
      { side: 1, faction: "Ork Warband" },
      { side: 1, faction: "Templars Detachment" },
      { side: 2, faction: "Astartes Warband" },
    ],
    impacts: [
      { faction: "Ork Warband", delta: 2 },
      { faction: "Templars Detachment", delta: 2 },
      { faction: "Astartes Warband", delta: -2 },
    ],
  },
  {
    date: new Date("2023-07-08"),
    location: "davis.digsite",
    players: [
      { side: 1, faction: "Ultramarines Detachment" },
      { side: 1, faction: "Templars Detachment" },
      { side: 2, faction: "Astartes Warband" },
      { side: 2, faction: "The Davis Boys" },
    ],
    impacts: [
      { faction: "Ultramarines Detachment", delta: 2 },
      { faction: "Templars Detachment", delta: 2 },
      { faction: "Astartes Warband", delta: -2 },
      { faction: "The Davis Boys", delta: -2 },
    ],
  },
  {
    date: new Date("2023-06-18"),
    location: "davis.habs-north",
    players: [
      { side: 1, faction: "Templars Detachment" },
      { side: 2, faction: "Kroot Mercenaries" },
      { side: 3, faction: "Eldar Corsairs" },
    ],
    impacts: [{ faction: "Templars Detachment", delta: 1 }],
  },
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
