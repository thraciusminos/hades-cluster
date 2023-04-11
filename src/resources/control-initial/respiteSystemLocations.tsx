import { Location } from "../locationUtils";

export const respiteSystemLocations: { [x: string]: Location } = {
  scrapyard: {
    top: "31.00",
    left: "14.00",
    name: "Scrapyard",
    description: "",
    sector: "",
    category: "site",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Dawn",
        control: 50,
      },
    ],
  },
  gallowfall: {
    top: "44.00",
    left: "42.00",
    name: "Gallowfall",
    description: "",
    sector: "",
    category: "site",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Dawn",
        control: 30,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 20,
      },
    ],
  },
  korasRespite: {
    top: "66.00",
    left: "58.00",
    name: "Kora's Respite",
    description: "",
    sector: "",
    category: "site",
    factions: [
      {
        name: "Heirs of Eternal Sun",
        control: 30,
      },
      {
        name: "Church of Dawn",
        control: 20,
      },
      {
        name: "Imperium",
        control: 10,
      },
    ],
  },
  koraPrime: {
    top: "62.00",
    left: "84.00",
    name: "Kora's Solace (Star)",
    description: "",
    sector: "",
    category: "site",
    factions: [
      {
        name: "Cult Mechanicum",
        control: 100,
      },
    ],
  },
};
