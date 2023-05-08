import { ScenarioEvent } from "../eventUtils";
import ghoulshead from "../../assets/artwork/ghoulshead/ghoulshead-wetland.png";

export const useScenarioEvents = (): ScenarioEvent[] => {
  return [
    {
      title: "Bayou Bievenue!",
      bannerImg: <img src={ghoulshead} alt={"banner"} />,
      description:
        "Rumours claim that new deposits of Bloodshards have been discovered deep in the marshlands of Ghoulshead. Region has slowly fallen to delapitation and rot since the original rush for the Shards died down some century ago. Whether the incorporeal apparitions said to manifest in their proximity are true or not, many are sure to seek them out. And equally many are bound perish to rival seekers, the Marooned, and whatever else the Bayou holds in its murky, perilous depths..",
    },
  ];
};

export default useScenarioEvents;
