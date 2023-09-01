import { Sector } from "../locationUtils";

export const respiteSectors: { [id: string]: Sector } = {
  novaBorealisObservatory: {
    top: "20.00",
    left: "20.25",
    name: "Nova Borealis Observatory",
    category: "mountain",
  },
  holySprings: {
    top: "16.00",
    left: "06.50",
    name: "Holy Springs",
    category: "settlement",
  },
  prospectShore: {
    top: "40.70",
    left: "05.70",
    name: "Prospect Shore",
    category: "settlement",
    description: "",
    sites: ["prospect172", "provingGrounds", "sunkenTemples"],
  },
  shaleBasin: {
    top: "29.00",
    left: "11.00",
    name: "Shale Basin",
    category: "factory",
    description: "",
    sites: [
      "Indigo Base",
      "Predecessor Installation",
      "Cerulean Falls",
      "Shale Basin Refineries",
    ],
  },
  samaritan: {
    top: "37.00",
    left: "16.50",
    name: "Samaritan City",
    category: "city",
  },
  viridian: {
    top: "57.50",
    left: "24.50",
    name: "Viridian Harbour",
    category: "city",
  },
  bountifulHarvest: {
    top: "66.00",
    left: "19.50",
    name: "Bountiful Harvest Ecology",
    category: "city",
  },
  erudity: {
    top: "75.50",
    left: "11.50",
    name: "Erudity Exclusion Zone",
    category: "site",
  },
  crashsiteTJ318: {
    top: "85.50",
    left: "2.50",
    name: "Crashsite Tango Juliet 318",
    category: "site",
  },
  shelleysCreek: {
    top: "31.50",
    left: "29.00",
    name: "Shelley's Creek",
    category: "settlement",
  },
  gracefulHeights: {
    top: "11.50",
    left: "35.00",
    name: "Graceful Heights",
    category: "city",
  },
  northPoint: {
    top: "26.00",
    left: "47.50",
    name: "North Point",
    category: "city",
  },
  mariusGap: {
    top: "42.00",
    left: "40.00",
    name: "Marius Gap",
    category: "city",
  },
  newElyseum: {
    top: "65.50",
    left: "37.50",
    name: "New Elyseum Reservary",
    category: "settlement",
  },
  filianIsthmus: {
    top: "47.50",
    left: "59.00",
    name: "Filian Isthmus",
    category: "settlement",
  },
  templarsRest: {
    top: "26.00",
    left: "65.00",
    name: "Templar's Rest",
    category: "settlement",
  },
  topoExcavationZ: {
    top: "9.50",
    left: "64.00",
    name: "Topological Excavation Zeta",
    category: "site",
    active: true,
  },
  waterExtractionOE: {
    top: "4.00",
    left: "82.50",
    name: "Water Extraction Site Omega Epsilon",
    category: "factory",
    active: true,
  },
  bulwark: {
    top: "19.00",
    left: "83.50",
    name: "Bulwark Outpost",
    category: "outpost",
  },
  icyWaters: {
    top: "18.00",
    left: "98.00",
    name: "Icy Waters",
    category: "settlement",
  },
  shearPeaks: {
    top: "41.00",
    left: "77.00",
    name: "Shear Peaks",
    category: "mountain",
    active: true,
  },
  garrote: {
    top: "39.50",
    left: "88.00",
    name: "Garrote",
    category: "settlement",
    active: true,
    hasExpand: true,
  },
  ghoulshead: {
    top: "34.00",
    left: "95.00",
    name: "Ghoulshead",
    description:
      "Ghoulshead is a fetid wetland. It has no major exportable goods and owes its continued existance to the original rush of prospectors after a discovery of exotically valuable gemstones among the ancient ruins of the wetlans. And the uncompromising stubbornness of the human species.",
    category: "outpost",
    active: true,
    hasExpand: true,
    sites: ["Walkertown", "St. Charles Parish", "Davis Plantation"],
  },
  tariff: {
    top: "56.50",
    left: "73.00",
    name: "Tariff",
    category: "settlement",
  },
  mosharrad: {
    top: "57.00",
    left: "83.00",
    name: "Mosharrad",
    category: "hive",
    active: true,
  },
  shrineAkka: {
    top: "67.50",
    left: "83.00",
    name: "Shrine of Akka",
    category: "settlement",
  },
  fesh: {
    top: "74.00",
    left: "88.50",
    name: "Fesh Listening Post",
    category: "outpost",
  },
  ashar: {
    top: "80.00",
    left: "94.00",
    name: "Ashar Wetlands",
    category: "site",
  },
  primarisHive: {
    top: "44.00",
    left: "48.00",
    name: "Primaris Hive",
    category: "hive",
    active: true,
  },
  ashport: {
    top: "51.50",
    left: "48.50",
    name: "Ashport",
    category: "city",
  },
  petroslav: {
    top: "70.00",
    left: "52.00",
    name: "Petroslav",
    category: "city",
  },
  southHaven: {
    top: "82.00",
    left: "59.00",
    name: "South Haven Rigs",
    category: "settlement",
  },
  antipolarStation: {
    top: "90.00",
    left: "51.50",
    name: "Antipolar Observation Station",
    category: "mountain",
    active: true,
  },
};
