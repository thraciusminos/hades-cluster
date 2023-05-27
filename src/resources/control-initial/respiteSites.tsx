import { Site } from "../locationUtils";

export const respiteSites: { [id: string]: Site } = {
  prospect172: {
    top: "31.70",
    left: "04.70",
    name: "Prospect-172",
    description:
      "Furthest frontier of Shale Basin refinery operations, the fracking sites here promise lucrative deposits of Prometheum. Industrial expansion collides frequently with Dawner settlements in the region.",
    category: "site",
    factions: [],
  },
  provingGrounds: {
    top: "39.50",
    left: "04.30",
    name: "Proving Grounds",
    description:
      "This region is dotted with sites held holy for the Children of Twilight. Every decade, rites of passage are held here for youth of the Children.",
    category: "site",
    factions: [],
  },
  sunkenTemples: {
    top: "47.00",
    left: "05.60",
    name: "Sunken Temples",
    description:
      "Ruined religious district half sunk into the swampy jungles of the region. Folktales suggest this district predates even the Twilight.",
    category: "site",
    factions: [],
  },
  "Indigo Base": {
    top: "27.50",
    left: "7.80",
    name: "Indigo Base",
    description:
      "As the largest fracking station in the frontier, this site has become the de facto Imperial military outpost in this region. Large industrial facility is adjoined by an equally impressive garrison and vehicle depot.",
    category: "outpost",
    factions: [],
  },
  "Predecessor Installation": {
    top: "23.00",
    left: "10.90",
    name: "Predecessor Installation",
    description:
      "Excavations on this site suggest that the structures of this installation predate the Twilight. Distinctive architecture suggest Predecessor origin, but further studies are required to rule out later imitations.",
    category: "site",
    factions: [],
  },
  "Cerulean Falls": {
    top: "36.00",
    left: "10.80",
    name: "Cerulean Falls",
    description:
      "Originally found overlooking a pristine waterfall, this settlement now has a front row seat to witness the fallout of Prometheum production efforts in this region. Small settlement situated in the giant Redwood region consists of several hab-stacks, pleasure zone for off-duty fracking crews, fishing docks and a small garrison.",
    category: "settlement",
    factions: [],
  },
  "Shale Basin Refineries": {
    top: "31.00",
    left: "14.00",
    name: "Shale Basin Refineries",
    description:
      "As the second largest refinery on the planet, this site represents a significant portion of Prometheum production on Kora's Respite. Large sprawling industrial structures are often half-covered in a chemical haze. Together with the habitation zone for the labour force, this site spans the area of a small city. It is garrisoned accordingly.",
    category: "factory",
    factions: [],
  },
  Walkertown: {
    top: "45.00",
    left: "60.00",
    name: "Walkertown",
    description: "",
    category: "site",
    factions: [],
  },
  "Ponte du Comardelle": {
    top: "70.00",
    left: "64.00",
    name: "Ponte du Comardelle",
    description: "",
    category: "site",
    factions: [],
  },
  "St. Charles Parish": {
    top: "57.00",
    left: "66.00",
    name: "St. Charles Parish",
    description: "",
    category: "site",
    factions: [],
  },
  "Davis Plantation": {
    top: "51.00",
    left: "78.00",
    name: "Davis Plantation",
    description: "",
    category: "site",
    factions: [],
    controlZones: ["davis.logging", "davis.digsite"],
  },
};
