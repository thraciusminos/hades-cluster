import { Sector } from "../locationUtils";

export const respiteSurfaceLocations: { [id: string]: Sector } = {
  novaBorealisObservatory: {
    top: "20.00",
    left: "20.25",
    name: "Nova Borealis Observatory",
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
    sites: [
      {
        top: "31.70",
        left: "04.70",
        name: "Prospect-172",
        description:
          "Furthest frontier of Shale Basin refinery operations, the fracking sites here promise lucrative deposits of Prometheum. Industrial expansion collides frequently with Dawner settlements in the region.",
        category: "site",
        factions: [
          {
            name: "Church of Dawn",
            control: 30,
          },
          {
            name: "Imperium",
            control: 20,
          },
        ],
      },
      {
        top: "39.50",
        left: "04.30",
        name: "Proving Grounds",
        description:
          "This region is dotted with sites held holy for the Children of Twilight. Every decade, rites of passage are held here for youth of the Children.",
        category: "site",
        factions: [
          {
            name: "Church of Dawn",
            control: 30,
          },
          {
            name: "Imperium",
            control: 20,
          },
        ],
      },
      {
        top: "47.00",
        left: "05.60",
        name: "Sunken Temples",
        description:
          "Ruined religious district half sunk into the swampy jungles of the region. Folktales suggest this district predates even the Twilight.",
        category: "site",
        factions: [
          {
            name: "Church of Dawn",
            control: 30,
          },
          {
            name: "Imperium",
            control: 20,
          },
        ],
      },
    ],
  },
  shaleBasin: {
    top: "29.00",
    left: "11.00",
    name: "Shale Basin",
    category: "factory",
    description: "",
    sites: [
      {
        top: "27.50",
        left: "7.80",
        name: "Indigo Base",
        description:
          "As the largest fracking station in the frontier, this site has become the de facto Imperial military outpost in this region. Large industrial facility is adjoined by an equally impressive garrison and vehicle depot.",
        category: "outpost",
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
      {
        top: "23.00",
        left: "10.90",
        name: "Predecessor Installation",
        description:
          "Excavations on this site suggest that the structures of this installation predate the Twilight. Distinctive architecture suggest Predecessor origin, but further studies are required to rule out later imitations.",
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
      {
        top: "36.00",
        left: "10.80",
        name: "Cerulean Falls",
        description:
          "Originally found overlooking a pristine waterfall, this settlement now has a front row seat to witness the fallout of Prometheum production efforts in this region. Small settlement situated in the giant Redwood region consists of several hab-stacks, pleasure zone for off-duty fracking crews, fishing docks and a small garrison.",
        category: "settlement",
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
      {
        top: "31.00",
        left: "14.00",
        name: "Shale Basin Refineries",
        description:
          "As the second largest refinery on the planet, this site represents a significant portion of Prometheum production on Kora's Respite. Large sprawling industrial structures are often half-covered in a chemical haze. Together with the habitation zone for the labour force, this site spans the area of a small city. It is garrisoned accordingly.",
        category: "factory",
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
    ],
  },
  samaritan: {
    top: "37.00",
    left: "16.50",
    name: "Samaritan City",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 60,
      },
      {
        name: "Church of Dawn",
        control: 40,
      },
    ],
  },
  viridian: {
    top: "57.50",
    left: "24.50",
    name: "Viridian Harbour",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Dawn",
        control: 10,
      },
    ],
  },
  bountifulHarvest: {
    top: "66.00",
    left: "19.50",
    name: "Bountiful Harvest Ecology",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Dawn",
        control: 20,
      },
    ],
  },
  erudity: {
    top: "75.50",
    left: "11.50",
    name: "Erudity Exclusion Zone",
    category: "site",
    factions: [
      {
        name: "Imperium",
        control: 20,
      },
      {
        name: "Church of Dawn",
        control: 10,
      },
    ],
  },
  crashsiteTJ318: {
    top: "85.50",
    left: "2.50",
    name: "Crashsite Tango Juliet 318",
    category: "site",
    factions: [
      {
        name: "Church of Dawn",
        control: 10,
      },
    ],
  },
  shelleysCreek: {
    top: "31.50",
    left: "29.00",
    name: "Shelley's Creek",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Dawn",
        control: 30,
      },
    ],
  },
  gracefulHeights: {
    top: "11.50",
    left: "35.00",
    name: "Graceful Heights",
    category: "city",
    factions: [
      {
        name: "Church of Dawn",
        control: 70,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 20,
      },
      {
        name: "Imperium",
        control: 10,
      },
    ],
  },
  northPoint: {
    top: "26.00",
    left: "47.50",
    name: "North Point",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 60,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 20,
      },
      {
        name: "Church of Reflection",
        control: 20,
      },
    ],
  },
  mariusGap: {
    top: "42.00",
    left: "40.00",
    name: "Marius Gap",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Reflection",
        control: 20,
      },
    ],
  },
  newElyseum: {
    top: "65.50",
    left: "37.50",
    name: "New Elyseum Reservary",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Reflection",
        control: 40,
      },
    ],
  },
  filianIsthmus: {
    top: "47.50",
    left: "59.00",
    name: "Filian Isthmus",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Reflection",
        control: 30,
      },
    ],
  },
  templarsRest: {
    top: "26.00",
    left: "65.00",
    name: "Templar's Rest",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 30,
      },
      {
        name: "Church of Reflection",
        control: 10,
      },
      {
        name: "Cult Mechanicum",
        control: 10,
      },
    ],
  },
  topoExcavationZ: {
    top: "9.50",
    left: "64.00",
    name: "Topological Excavation Zeta",
    category: "site",
    factions: [
      {
        name: "Cult Mechanicum",
        control: 50,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 40,
      },
      {
        name: "Imperium",
        control: 20,
      },
    ],
  },
  waterExtractionOE: {
    top: "4.00",
    left: "82.50",
    name: "Water Extraction Site Omega Epsilon",
    category: "factory",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Cult Mechanicum",
        control: 30,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 20,
      },
    ],
  },
  bulwark: {
    top: "19.00",
    left: "83.50",
    name: "Bulwark Outpost",
    category: "outpost",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 20,
      },
      {
        name: "Church of Dawn",
        control: 20,
      },
      {
        name: "Church of Reflection",
        control: 10,
      },
    ],
  },
  icyWaters: {
    top: "18.00",
    left: "98.00",
    name: "Icy Waters",
    category: "settlement",
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
  shearPeaks: {
    top: "41.00",
    left: "77.00",
    name: "Shear Peaks",
    category: "site",
    factions: [
      {
        name: "Church of Reflection",
        control: 40,
      },
    ],
  },
  garrote: {
    top: "39.50",
    left: "88.00",
    name: "Garrote",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Reflection",
        control: 20,
      },
      {
        name: "Heirs of Eternal Sun",
        control: 20,
      },
      {
        name: "Church of Dawn",
        control: 10,
      },
    ],
  },
  ghoulshead: {
    top: "34.00",
    left: "95.00",
    name: "Ghoulshead",
    category: "site",
    factions: [
      {
        name: "Heirs of Eternal Sun",
        control: 40,
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
  tariff: {
    top: "56.50",
    left: "73.00",
    name: "Tariff",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Church of Reflection",
        control: 30,
      },
    ],
  },
  mosharrad: {
    top: "57.00",
    left: "83.00",
    name: "Mosharrad",
    category: "hive",
    factions: [
      {
        name: "Imperium",
        control: 60,
      },
      {
        name: "Church of Reflection",
        control: 40,
      },
    ],
  },
  shrineAkka: {
    top: "67.50",
    left: "83.00",
    name: "Shrine of Akka",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 30,
      },
      {
        name: "Church of Reflection",
        control: 50,
      },
    ],
  },
  fesh: {
    top: "74.00",
    left: "88.50",
    name: "Fesh Listening Post",
    category: "outpost",
    factions: [
      {
        name: "Imperium",
        control: 40,
      },
      {
        name: "Church of Reflection",
        control: 20,
      },
      {
        name: "Church of Dawn",
        control: 10,
      },
    ],
  },
  ashar: {
    top: "80.00",
    left: "94.00",
    name: "Ashar Wetlands",
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
  primarisHive: {
    top: "44.00",
    left: "48.00",
    name: "Primaris Hive",
    category: "hive",
    factions: [
      {
        name: "Imperium",
        control: 90,
      },
      {
        name: "Church of Reflection",
        control: 30,
      },
      {
        name: "Cult Mechanicum",
        control: 10,
      },
    ],
  },
  ashport: {
    top: "51.50",
    left: "48.50",
    name: "Ashport",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 70,
      },
      {
        name: "Church of Reflection",
        control: 20,
      },
      {
        name: "Cult Mechanicum",
        control: 10,
      },
    ],
  },
  petroslav: {
    top: "70.00",
    left: "52.00",
    name: "Petroslav",
    category: "city",
    factions: [
      {
        name: "Imperium",
        control: 60,
      },
      {
        name: "Church of Reflection",
        control: 20,
      },
      {
        name: "Cult Mechanicum",
        control: 10,
      },
    ],
  },
  southHaven: {
    top: "82.00",
    left: "59.00",
    name: "South Haven Rigs",
    category: "settlement",
    factions: [
      {
        name: "Imperium",
        control: 50,
      },
      {
        name: "Cult Mechanicum",
        control: 20,
      },
    ],
  },
  antipolarStation: {
    top: "90.00",
    left: "51.50",
    name: "Antipolar Observation Station",
    category: "site",
    factions: [
      {
        name: "Cult Mechanicum",
        control: 100,
      },
    ],
  },
};
