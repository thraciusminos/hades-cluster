import { ControlZone } from "../locationUtils";

export const respiteZones: { [id: string]: ControlZone } = {
  "davis.logging": {
    top: "31.70",
    left: "04.70",
    name: "Logging Camp",
    factions: [
      {
        name: "Nightsong",
        control: 3,
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
        control: 1,
      },
      {
        name: "Nightsong",
        control: 1,
      },
    ],
  },
};
