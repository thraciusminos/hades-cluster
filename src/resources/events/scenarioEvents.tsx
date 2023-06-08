import { ScenarioEvent } from "../eventUtils";
import gallowsEnd from "@assets/artwork/banners/space-hulk-banner.jpeg";
import ghoulshead from "@assets/artwork/ghoulshead/ghoulshead-wetland.png";

export const useScenarioEvents = (): ScenarioEvent[] => {
  return [
    {
      title: "Bloodshard Hunt!",
      date: new Date("2023-06-08"),
      bannerImg: (
        <img src={ghoulshead} alt={"banner"} width={"100%"} height={"320px"} />
      ),
      description:
        "Our agents have confirmed the discovery of Bloodshard caches on Davis Plantation in Ghoulshead. These arcane crystals are invaluable for study of the recent anomalies in the system.",
      description2:
        "We have already dispatched forward troops to the region from the Garrote garrison. But this discovery is sure to attract the criminal and the subversive. It is going to get nasty..",
      view: "respiteSurface",
      location: "ghoulshead",
    },
    {
      title: "Massive anomaly detected",
      date: new Date("2023-06-02"),
      bannerImg: (
        <img src={gallowsEnd} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Massive unidentified object detected in system. Energy signature considerable, suggests multiple primary power cores. Initial reconnaissance suggests an amalgam of various voidships. Emergency beacon transmissions broadcast the identifier: 'Gallows End'.",
      view: "minosSystem",
      location: "gallowsEnd",
    },
    {
      title: "Bayou Bievenue!",
      date: new Date("2023-05-28"),
      bannerImg: (
        <img src={ghoulshead} alt={"banner"} width={"100%"} height={"320px"} />
      ),
      description:
        "Rumours claim that new deposits of Bloodshards have been discovered deep in the marshlands of Ghoulshead. Region has slowly fallen to delapitation and rot since the original rush for the Shards died down some century ago.",
      description2:
        "Whether the incorporeal apparitions said to manifest in their proximity are true or not, many are sure to seek them out. And equally many are bound perish to rival seekers, the Marooned, and whatever else the Bayou holds in its murky, perilous depths..",
      view: "respiteSurface",
      location: "ghoulshead",
    },
  ];
};

export default useScenarioEvents;
