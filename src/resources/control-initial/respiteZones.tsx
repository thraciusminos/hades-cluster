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
  },
};
