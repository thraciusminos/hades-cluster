import styled from "styled-components";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import {
  Celestial,
  Location,
  Sector,
  Site,
  View,
} from "@resources/locationUtils";
import { Image } from "@app/components/common/Image";
import { PreviewPanelSites } from "./PreviewPanelSites";
import { PreviewExpandButton } from "./PreviewExpandButton";

interface StyledProps {
  align: "left" | "right";
}

const StyledPanelWrapper = styled.div<StyledProps>`
  position: absolute;
  top: 9%;
  ${(props) => props.align}: 2%;
  width: 30%;
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
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;

    padding: 20px;
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

  .bannerWrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 180px;

    background-color: rgba(95, 97, 93, 93%);
  }

  .bannerImage {
    width: 100%;
    height: 100%;
  }

  .locationTitle {
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 1.3px;
    color: rgba(110, 201, 18, 93%);
  }

  .locationDescription {
    font-size: 16px;
    color: rgba(110, 201, 18, 93%);
  }
`;

const impsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

const getPanelImages = (location: Location) => {
  switch (location.name) {
    case "Minos Prime":
      return "minosPrime";
    case "Kora's Respite":
      return "respite";
    case "Gallows End":
      return "spacehulk";
    case "Scrapyard":
      return "scrapyard";
    case "Primaris Hive":
      return "primarisHive";
    case "Ghoulshead":
      return "ghoulsheadFavela";
    case "Garrote":
      return "garrote1";
    default:
      return "";
  }
};

interface Props {
  align: "left" | "right";
  sites: Site[];
  expand: boolean;
  activeSite: Site | null;
  activeLocation: Celestial | Sector;
  setExpand: (newValue: boolean) => void;
  setActiveSite: (site: Site | null) => void;
  setActiveView: (view: View) => void;
}

export const PreviewPanel: React.FC<Props> = ({
  align,
  sites,
  expand,
  activeSite,
  activeLocation,
  setExpand,
  setActiveSite,
  setActiveView,
}) => {
  const theme = useTheme();

  return (
    <StyledPanelWrapper align={align}>
      <Box className="locationPanel">
        <Box className="bannerWrapper">
          <Image src={getPanelImages(activeLocation)} className="bannerImage" />
        </Box>
        <Box mt="185px">
          <Stack spacing={2}>
            {activeLocation.hasExpand && (
              <PreviewExpandButton
                align={align}
                expand={expand}
                location={activeLocation}
                setActiveView={setActiveView}
                setExpand={setExpand}
              />
            )}

            <Box>
              <Typography className="locationTitle">
                {activeLocation?.name}
              </Typography>
              <Typography className="locationDescription">
                {activeLocation?.short}
              </Typography>
            </Box>
            <Divider
              style={{
                borderColor: theme.palette.primary.main,
              }}
            />

            <Typography className="locationDescription">
              {activeLocation.description || impsum}
            </Typography>
            <Divider
              style={{
                borderColor: theme.palette.primary.main,
              }}
            />

            {/* <FactionControlBars factions={location.factions} /> */}

            {"sites" in activeLocation && (
              <PreviewPanelSites
                sites={sites}
                activeSite={activeSite}
                setActiveSite={setActiveSite}
              />
            )}
          </Stack>
        </Box>
      </Box>
    </StyledPanelWrapper>
  );
};
