import { ControlZone } from "../locationUtils";

export const respiteZones: { [id: string]: ControlZone } = {
  "davis.logging": {
    top: "31.70",
    left: "04.70",
    name: "Logging Camp",
    factions: [
      {
        name: "The Davis Boys",
        control: 2,
      },
    ],
    eventItems: 1,
  },
  "davis.digsite": {
    top: "31.70",
    left: "04.70",
    name: "Digsite",
    factions: [
      {
        name: "The Davis Boys",
        control: 3,
      },
    ],
    eventItems: 1,
  },
  "davis.processing": {
    top: "31.70",
    left: "04.70",
    name: "Processing Plant",
    factions: [
      {
        name: "The Davis Boys",
        control: 3,
      },
    ],
    eventItems: 0,
  },
  "davis.habs-north": {
    top: "31.70",
    left: "04.70",
    name: "North Habs",
    factions: [
      {
        name: "The Davis Boys",
        control: 3,
      },
      {
        name: "Parishians",
        control: 2,
      },
    ],
    eventItems: 1,
  },
  "davis.habs-east": {
    top: "31.70",
    left: "04.70",
    name: "East Habs",
    factions: [
      {
        name: "The Davis Boys",
        control: 2,
      },
      {
        name: "Parishians",
        control: 3,
      },
    ],
    eventItems: 1,
  },
  "davis.estate": {
    top: "31.70",
    left: "04.70",
    name: "Davis Estate",
    factions: [
      {
        name: "The Davis Boys",
        control: 3,
      },
    ],
    eventItems: 1,
  },
  "davis.aquacology": {
    top: "31.70",
    left: "04.70",
    name: "Aquacological Plant",
    factions: [
      {
        name: "The Davis Boys",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "davis.salt-harvest": {
    top: "31.70",
    left: "04.70",
    name: "Salt Harvest Plains",
    factions: [
      {
        name: "The Davis Boys",
        control: 1,
      },
      {
        name: "Parishians",
        control: 3,
      },
    ],
  },
  "davis.checkpoint": {
    top: "31.70",
    left: "04.70",
    name: "Dead Mans Ditch Checkpoint",
    factions: [
      {
        name: "The Davis Boys",
        control: 3,
      },
    ],
    eventItems: 1,
  },
  "walkertown.chemical": {
    top: "31.70",
    left: "04.70",
    name: "Chemicals Processing",
    factions: [
      {
        name: "The Oilers",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "walkertown.refinery": {
    top: "31.70",
    left: "04.70",
    name: "Refinery Headquarters",
    factions: [
      {
        name: "The Oilers",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 2,
  },
  "walkertown.docks": {
    top: "31.70",
    left: "04.70",
    name: "Refinery Docks Control",
    factions: [
      {
        name: "The Oilers",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "walkertown.chapel": {
    top: "31.70",
    left: "04.70",
    name: "Chapel of Redemption",
    factions: [
      {
        name: "Parishians",
        control: 3,
      },
    ],
    eventItems: 2,
  },
  "walkertown.wulang": {
    top: "31.70",
    left: "04.70",
    name: "Wu-Lang Habsprawl",
    factions: [
      {
        name: "Glints",
        control: 2,
      },
      {
        name: "The Oilers",
        control: 2,
      },
      {
        name: "Parishians",
        control: 2,
      },
    ],
    depletedItems: 0,
    eventItems: 3,
    successfulItems: 0,
  },
  "walkertown.cargoport": {
    top: "31.70",
    left: "04.70",
    name: "Cargo Port Control",
    factions: [
      {
        name: "The Oilers",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "walkertown.transport": {
    top: "31.70",
    left: "04.70",
    name: "Land Transport Hub",
    factions: [
      {
        name: "Glints",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "walkertown.comms": {
    top: "31.70",
    left: "04.70",
    name: "Comms Array (Offline)",
    factions: [
      {
        name: "Glints",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "walkertown.mines": {
    top: "31.70",
    left: "04.70",
    name: "Walkertown Mines",
    factions: [
      {
        name: "Glints",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 1,
  },
  "walkertown.processing": {
    top: "91.70",
    left: "04.70",
    name: "Processing Plant Headquarters",
    factions: [
      {
        name: "Glints",
        control: 3,
      },
      {
        name: "Parishians",
        control: 1,
      },
    ],
    eventItems: 2,
  },
};
