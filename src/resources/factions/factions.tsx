import { Faction } from "../factionUtils";

export const factions: { [id: string]: Faction } = {
  "The Davis Boys": {
    name: "The Davis Boys",
    short: "The Enforcers",
    description:
      "Thugs and outcasts working as enforcers at the Davis Plantations. They make sure Davis brothers' word is the law in the area.",
    icon: "militia",
    color: "rgba(35, 75, 0, 90%)",
    bgColor: "rgba(35, 75, 0, 50%)",
    meta: "Ghoulshead, Davis plantation, militia",
  },
  Nightsong: {
    name: "Nightsong",
    short: "The Marooned",
    description:
      "The Marooned embraced their exile after Imperial authorities settled these areas. But Nightsong haven't forgotten what was once theirs, and want back what they are owed.",
    icon: "tribal",
    color: "rgba(91, 55, 10, 90%)",
    bgColor: "rgba(91, 55, 10, 50%)",
    meta: "Ghoulshead, Davis plantation, Marooned, tribal",
  },
  Parishians: {
    name: "Dayns Children",
    short: "The Parishians",
    description:
      "Father Ibrahim Dayn bestows many with a glimmer of light in Ghoulshead, where little hope can be normally be found. Thus, they are ubiquitous in the communities of the Bayou.",
    icon: "cult",
    color: "rgba(212, 201, 51, 90%)",
    bgColor: "rgba(212, 201, 51, 50%)",
    meta: "Ghoulshead, Davis plantation, Ibrahims Flock, tribal",
  },
  Imperium: {
    name: "The Imperium",
    description: "",
    icon: "imperial",
    color: "rgba(184, 20, 175, 90%)",
    bgColor: "rgba(184, 20, 175, 50%)",
    meta: "Imperium",
  },
  RDF: {
    name: "Respitean Defence Forces",
    description: "",
    icon: "imperial",
    color: "rgba(10, 46, 91, 90%)",
    bgColor: "rgba(10, 46, 91, 50%)",
    meta: "Imperium",
  },
  "Templars Detachment": {
    name: "Templars Detachment",
    description: "",
    icon: "imperial",
    color: "rgba(255, 255, 204, 90%)",
    bgColor: "rgba(255, 255, 204, 50%)",
    meta: "Aleksi",
  },
  "Ultramarines Detachment": {
    name: "Ultramarines Detachment",
    description: "",
    icon: "imperial",
    color: "rgba(51, 51, 255, 90%)",
    bgColor: "rgba(51, 51, 255, 50%)",
    meta: "Mikko",
  },
  "Astartes Warband": {
    name: "Astartes Warband",
    description: "",
    icon: "renegade",
    color: "rgba(255, 102, 102, 90%)",
    bgColor: "rgba(255, 102, 102, 50%)",
    meta: "Pete",
  },
  "Ork Warband": {
    name: "Ork Warband",
    description: "",
    icon: "xenos",
    color: "rgba(51, 204, 51, 90%)",
    bgColor: "rgba(51, 204, 51, 50%)",
    meta: "Matias",
  },
};
