import { Box } from "@mui/material";
import { Construction, Grass, WarningAmber } from "@mui/icons-material";
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
import { DavisZones } from "./DavisZones";
import { WalkertownZones } from "./WalkertownZones";

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
          <>
            {activeSite.name === "Davis Plantation" && (
              <Box className="siteContent">
                <Box className="siteBgContainer">
                  <DavisZones zones={siteZones} />
                  <Image src="davisSite" className="mapImage" />
                </Box>
                <ExpandFactionsPanel factions={siteFactions} />
              </Box>
            )}
            {activeSite.name === "Walkertown" && (
              <Box className="siteContent">
                <Box className="siteBgContainer">
                  <WalkertownZones zones={siteZones} />
                  <Image src="walkertownSite" className="mapImage" />
                </Box>
                <ExpandFactionsPanel factions={siteFactions} />
              </Box>
            )}
            {activeSite.name === "St. Charles Parish" && (
              <Box
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                fontSize="36px"
              >
                <Construction
                  sx={{ fontSize: "96px", paddingBottom: "16px" }}
                />
                Under construction!
              </Box>
            )}
          </>
        ) : (
          <Box className="expandContent">
            {expandImages.map}
            <Box
              sx={{
                position: "absolute",
                top: "44%",
                left: "80%",
                fontSize: "2rem",
                zIndex: 4,
              }}
            >
              <WarningAmber
                sx={{
                  color: "rgba(255, 197, 10, 100%)",
                  backgroundColor: "black",
                  clipPath: "polygon(50% 0%, 0 91%, 100% 91%);",
                }}
              />
              <Grass color="error" />
            </Box>
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
