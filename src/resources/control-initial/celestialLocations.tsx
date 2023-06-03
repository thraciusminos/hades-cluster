import { Celestial } from "../locationUtils";

export const celestialLocations: { [id: string]: Celestial } = {
  scrapyard: {
    top: "31.00",
    left: "14.00",
    name: "Scrapyard",
    description:
      "Imperial dockyard and salvaging operation harvesting an ancient graveyard of space ships.",
    active: true,
  },
  gallowsEnd: {
    top: "44.00",
    left: "42.00",
    name: "Gallows End",
    short: "Space hulk",
    description:
      "Massive unidentified object detected. Energy signature considerable, suggests multiple primary power cores. Designation: Gallows End",
    active: true,
  },
  korasRespite: {
    top: "66.00",
    left: "58.00",
    name: "Kora's Respite",
    short: "Agriworld",
    description:
      "Planet named after a legend of ancient Terra, where a beleagued princess found refuge in a secluded paradise. Primary inhabited planet and the seat of Imperial governance in the system. Exports a large majority of agricultural products of the sector, and has a significant water and fossil fuel production.",
    active: true,
    hasExpand: true,
  },
  minos: {
    top: "62.00",
    left: "84.00",
    name: "Minos Prime",
    short: "Star",
    description:
      "Primary star in Minos system. Age: apx. 4.6 billion years. Mass: 1.989 × 1030 kg. Density: 1.409 g/cm3. Spectral Type: G2V. Equatorial Radius: 695,500 km. Rotation period at equator: About 27 days. Rotation period at poles: About 36 days. Surface temperature: 5772 degrees Kelvinium.",
    active: true,
  },
};
