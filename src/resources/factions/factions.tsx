import { Faction } from "../factionUtils";

export const factions: { [id: string]: Faction } = {
  "The Davis Boys": {
    name: "The Davis Boys",
    description:
      "Thugs and outcasts working as enforcers at the Davis Plantations. They make sure Davis brothers' word is the law in the area.",
    icon: "militia",
    color: "rgba(35, 75, 0, 90%)",
    bgColor: "rgba(35, 75, 0, 50%)",
    meta: "Ghoulshead, Davis plantation, militia",
  },
  Nightsong: {
    name: "Nightsong",
    description:
      "The Marooned embraced their exile after Imperial authorities settled these areas. But Nightsong haven't forgotten what was once theirs, and want back what they are owed.",
    icon: "tribal",
    color: "rgba(91, 55, 10, 90%)",
    bgColor: "rgba(91, 55, 10, 50%)",
    meta: "Ghoulshead, Davis plantation, Marooned, tribal",
  },
  Parishians: {
    name: "Parishians",
    description:
      "Father Ibrahim Dayn bestows many with a glimmer of light in Ghoulshead, where little hope can be normally be found. Thus, they are ubiquitous in the communities of the Bayou.",
    icon: "cult",
    color: "rgba(212, 201, 51, 90%)",
    bgColor: "rgba(212, 201, 51, 50%)",
    meta: "Ghoulshead, Davis plantation, Ibrahims Flock, tribal",
  },
  Imperium: {
    name: "Imperium",
    description: "",
    icon: "imperial",
    color: "rgba(91, 10, 87, 90%)",
    bgColor: "rgba(91, 10, 87, 50%)",
    meta: "Imperium",
  },
  "RDF": {
    name: "Respitean Defence Forces",
    description: "",
    icon: "imperial",
    color: "rgba(10, 46, 91, 90%)",
    bgColor: "rgba(10, 46, 91, 50%)",
    meta: "Imperium",
  },
};
