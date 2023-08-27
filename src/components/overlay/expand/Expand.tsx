import { Box, styled } from "@mui/material";
import { Celestial, ControlZone, Sector, Site } from "@resources/locationUtils";
import { GhoulsheadExpand } from "./ghoulshead/GhoulsheadExpand";

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
  return (
    <StyledExpandWrapper align={previewAlignment}>
      <Box className="locationPanel">
        <GhoulsheadExpand
          sites={sites}
          controlZones={controlZones}
          activeSite={activeSite}
          activeLocation={activeLocation}
          setActiveSite={setActiveSite}
        />
      </Box>
    </StyledExpandWrapper>
  );
};
