import { Box } from "@mui/material";
import { Image } from "@app/components/common/Image";
import { factions } from "@resources/factions/factions";
import { MapMarker } from "@app/components/common/MapMarker";
import {
  Celestial,
  ControlZone,
  Sector,
  Site,
} from "@app/resources/locationUtils";
import { ExpandFactionsPanel } from "../ExpandFactionsPanel";
import { getExpandImages } from "../ExpandUtils";

interface Props {
  sites: Site[];
  controlZones: { [x: string]: ControlZone } | undefined;
  activeSite: Site | null;
  activeLocation: Celestial | Sector;
  setActiveSite: (site: Site | null) => void;
}

export const GhoulsheadExpand: React.FC<Props> = ({
  sites,
  controlZones,
  activeSite,
  activeLocation,
  setActiveSite,
}) => {
  const expandImages = getExpandImages(activeLocation);
  const siteFactions = activeSite?.factions.map(
    (factionId) => factions[factionId]
  );

  const siteZones: Record<string, ControlZone> = {};
  if (controlZones) {
    activeSite?.controlZones?.forEach(
      (zoneId) => (siteZones[zoneId] = controlZones[zoneId])
    );
  }
  return (
    <Box>
      <Box className="bannersContainer">{expandImages?.banners}</Box>

      <Box className="expandBody">
        {activeSite ? (
          activeSite.name === "Davis Plantation" && (
            <Box className="siteContent">
              <Box className="siteBgContainer">
                {/* <DavisZones zones={siteZones} /> */}
                <Image src="davisSite" className="mapImage" />
              </Box>
              <ExpandFactionsPanel factions={siteFactions} />
            </Box>
          )
        ) : (
          <Box className="expandContent">
            {expandImages.map}
            {sites &&
              sites?.map((site) => {
                return (
                  <MapMarker
                    key={site.name}
                    location={site}
                    onClick={() => setActiveSite(site)}
                  />
                );
              })}
          </Box>
        )}
      </Box>
    </Box>
  );
};
