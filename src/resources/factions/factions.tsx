import { Faction } from "../factionUtils";

export const factions: { [id: string]: Faction } = {
  "The Davis Boys": {
    name: "The Davis Boys",
    description:
      "Thugs and outcasts working as enforcers at the Davis Plantations. They make sure Davis brothers' word is the law in the area.",
    icon: "militia",
    color: "rgba(15, 84, 20, 90%)",
    bgColor: "rgba(15, 84, 20, 50%)",
    meta: "Ghoulshead, Davis plantation, militia",
  },
  Nightsong: {
    name: "Nightsong",
    description:
      "The Marooned embraced their exile after Imperial authorities settled these areas. But Nightsong haven't forgotten what was once theirs, and want back what they are owed.",
    icon: "tribal",
    color: "rgba(84, 62, 11, 90%)",
    bgColor: "rgba(84, 62, 11, 50%)",
    meta: "Ghoulshead, Davis plantation, Marooned, tribal",
  },
  Parishians: {
    name: "Parishians",
    description:
      "Father Ibrahim Dayn bestows many with a glimmer of light in Ghoulshead, where little hope can be normally be found. Thus, they are ubiquitous in the communities of the Bayou.",
    icon: "tribal",
    color: "rgba(212, 201, 51, 90%)",
    bgColor: "rgba(212, 201, 51, 50%)",
    meta: "Ghoulshead, Davis plantation, Ibrahims Flock, tribal",
  },
};
