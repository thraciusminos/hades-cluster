import { Box, styled } from "@mui/material";
import { Celestial, ControlZone, Sector, Site } from "@resources/locationUtils";
import { factions } from "@resources/factions/factions";
import { Image } from "@app/components/common/Image";
import { MapMarker } from "../../common/MapMarker";
import { getExpandImages } from "./ExpandUtils";
import { ExpandFactionsPanel } from "./ExpandFactionsPanel";
import { DavisZones } from "./davis-plantation/DavisZones";

interface StyledProps {
  align: "left" | "right";
}

const StyledExpandWrapper = styled(Box)<StyledProps>`
  ${(props) => `
    position: absolute;
    top: 9%;
    ${props.align}: 34%;
    width: 64%;
    min-height: 90%;
    background-color: rgba(104, 161, 24, 93%);
    clip-path: polygon(
      5% 0,
      95% 0,
      100% 5%,
      100% 95%,
      95% 100%,
      5% 100%,
      0 95%,
      0 5%
    );
    z-index: 4;

    .locationPanel {
      position: absolute;
      top: ${props.theme.spacing(0.5)};
      left: ${props.theme.spacing(0.5)};
      right: ${props.theme.spacing(0.5)};
      bottom: ${props.theme.spacing(0.5)};

      padding: ${props.theme.spacing(3)};
      background-color: rgba(34, 38, 35, 93%);
      clip-path: polygon(
        5% 0,
        95% 0,
        100% 5%,
        100% 95%,
        95% 100%,
        5% 100%,
        0 95%,
        0 5%
      );
    }

    .bannersContainer {
      position: absolute;
      top: ${props.theme.spacing(5)};
      left: ${props.theme.spacing(3)};
      right: ${props.theme.spacing(3)};
      height: 140px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .bannerImage {
      width: 31%;
      height: 140px;
      background-color: rgba(95, 97, 93, 93%);
    }

    .expandBody {
      position: absolute;
      top: 200px;
      left: ${props.theme.spacing(3)};
      right: ${props.theme.spacing(3)};
      bottom: ${props.theme.spacing(5)};
    }

    .expandContent {
      width: 100%;
      height: 100%;
    }

    .siteContent {
      width: 100%;
      height: 100%;
    }

    .siteBgContainer {
      position: absolute;
      top: 0;
      left: 0;
      right: 30%;
      bottom: 0;
    }

    .siteDescription {
      position: absolute;
      top: 0;
      left: 70%;
      right: 0;
      bottom: 0;
      overflow-Y: auto;
      margin-left: ${props.theme.spacing(2)};
      padding: ${props.theme.spacing(2)} ${props.theme.spacing(1)};
      border-radius: ${props.theme.spacing(0.5)};
      background-color: ${props.theme.palette.grey[900]};
      color: ${props.theme.palette.primary.dark};
    }

    .mapImage {
      width: 100%;
      height: 100%;
  }`}
`;

interface Props {
  sites: Site[];
  controlZones: { [x: string]: ControlZone } | undefined;
  activeSite: Site | null;
  activeLocation: Celestial | Sector;
  setActiveSite: (site: Site | null) => void;
  previewAlignment: "left" | "right";
}

export const Expand: React.FC<Props> = ({
  sites,
  controlZones,
  activeSite,
  activeLocation,
  setActiveSite,
  previewAlignment,
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
    <StyledExpandWrapper align={previewAlignment}>
      <Box className="locationPanel">
        <Box className="bannersContainer">{expandImages?.banners}</Box>

        <Box className="expandBody">
          {activeSite ? (
            <Box className="siteContent">
              <Box className="siteBgContainer">
                <DavisZones zones={siteZones} />
                <Image src="davisSite" className="mapImage" />
              </Box>
              <ExpandFactionsPanel factions={siteFactions} />
            </Box>
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
    </StyledExpandWrapper>
  );
};
