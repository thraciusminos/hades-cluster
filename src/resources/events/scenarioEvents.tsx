import { ScenarioEvent } from "../eventUtils";
import celestials from "@assets/artwork/celestials";
import gallowsEnd from "@assets/artwork/banners/space-hulk-banner.jpeg";
import chaosFleet from "@assets/artwork/banners/chaos-fleet.jpg";
import dropPods from "@assets/artwork/banners/drop-pods.jpeg";
import chaosSymbol from "@assets/artwork/banners/chaos-symbol.jpeg";
import ghoulshead from "@assets/artwork/ghoulshead/ghoulshead-wetland.png";
import walkertown from "@assets/artwork/ghoulshead/ghoulshead-walkertown.jpeg";
import koras from "@assets/artwork/celestials/koras-respite-banner.jpeg";

export const useScenarioEvents = (): ScenarioEvent[] => {
  return [
    {
      title: "Ghoulshead Davis Estate under Imperial control",
      date: new Date("2023-08-27"),
      bannerImg: (
        <img src={ghoulshead} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Ground engagements at Davis' Plantation are already decreasing in volume and severity, after Imperial forces gained control of the installation's primary command center earlier today.",
      description2:
        'Imperial seizure has allowed us to recover of many of the valuable "Bloodstone" caches, but search still continues to find any remaining stashes.',
      view: "respiteSurface",
      location: "ghoulshead",
    },
    {
      title: "Faction rivalry escalating in Walkertown, Ghoulshead",
      date: new Date("2023-08-14"),
      bannerImg: (
        <img src={walkertown} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Disagreements between the two main factions, Walkertown Miner's Guild and Carbonium Refiner's Association, have peaked in severity recently.",
      description2:
        "Last week things escalated to violence, as several vehicle borne explosives were detonated and gun battles were fought on the hab block streets.",
      view: "respiteSurface",
      location: "ghoulshead",
    },
    {
      title: "Xenos Raiders",
      date: new Date("2023-08-05"),
      bannerImg: (
        <img
          src={celestials.scrapyard}
          alt={"banner"}
          width={"100%"}
          height={"180px"}
        />
      ),
      description:
        "Several traces of Xenos void ships have been identified entering the system.",
      description2:
        "They must be using the Rifts interference to avoid detection. System Command has directed the Imperial Navy to increase patrols to avoid further deterioration of the situation.",
      view: "minosSystem",
      location: "scrapyard",
    },
    {
      title: "Space Hulk plundered",
      date: new Date("2023-07-28"),
      bannerImg: (
        <img src={gallowsEnd} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "While our initial probes into the space hulk designated as 'Gallow's End' are in progress, it has become apparent that we are not the only ones interested in its secrets.",
      description2:
        "Several unidentified vessels have slipped our cordon and inserted teams into the Hulk. Only the Emperor knows what damage they might have inflicted.",
      view: "minosSystem",
      location: "gallowsEnd",
    },
    {
      title: "Heretic Astartes Infiltrators",
      date: new Date("2023-07-20"),
      bannerImg: (
        <img src={chaosSymbol} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Respitean Defence Force survivors report being assaulted by heretical astartes warriors. Traumatized soldiers describe frothing lunatics charging through a firestorm seemingly unfazed.",
      description2:
        "Imperial Astartes have been tasked to seek and destroy any heretic forces.",
      view: "respiteSurface",
      location: "ghoulshead",
    },
    {
      title: "Heretic Warbands marauding in Minos System",
      date: new Date("2023-07-14"),
      bannerImg: (
        <img src={chaosFleet} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Several minig vessels and system monitor ships have been ambushed and destroyed by marauding Chaos raiders.",
      description2:
        "Imperial Navy is tracking down the raiders, but interference from the Rift makes surveillance difficult.",
      view: "minosSystem",
      location: "",
    },
    {
      title: "Astartes strike teams deployed to Ghoulshead",
      date: new Date("2023-07-08"),
      bannerImg: (
        <img src={dropPods} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "System Command has authorized the deployment of Astartes investigation teams to Ghoulshead Incident Site.",
      description2:
        "Strike teams have already been deployed via rapid insertion procedures. They should report in shortly.",
      view: "respiteSurface",
      location: "ghoulshead",
    },
    {
      title: "Escalating engagements in Ghoulshead",
      date: new Date("2023-06-18"),
      bannerImg: (
        <img src={ghoulshead} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Ground combat engagements have intensified in Ghoulshead with several Xeno factions identified.",
      description2:
        "Respitean Defence Forces have dispatched forward elements to establish a base of operations in the sector.",
      view: "respiteSurface",
      location: "ghoulshead",
    },
    {
      title: "Surge in Renegade Activity",
      date: new Date("2023-06-12"),
      bannerImg: (
        <img src={koras} alt={"banner"} width={"100%"} height={"180px"} />
      ),
      description:
        "Several Imperial sectors report a considerable increase in separatist and renegade activity.",
      description2:
        "Pacification detachments have already neutralized those involved with these disgraceful events. We will keep vigil for any further incidents.",
      view: "minosSystem",
      location: "korasRespite",
    },
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
