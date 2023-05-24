import React from "react";
import styled from "styled-components";

import winterHarbor from "../../../assets/artwork/Koras-winter-harbor.jpg";
import { Button, Divider, Stack, Typography } from "@mui/material";
import {
  Celestial,
  Location,
  Sector,
  Site,
  View,
} from "../../../resources/locationUtils";
import { FactionControlBars } from "../../common/FactionControlBars";
import { PreviewPanelLocations } from "./PreviewPanelLocation";
import ghoulshead from "../../../assets/artwork/ghoulshead/ghoulshead-favela.png";
import garrote from "../../../assets/artwork/garrote/garrote-3.png";

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
    padding: 8px;
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 1.3px;
    color: rgba(110, 201, 18, 93%);
  }

  .locationDescription {
    padding: 8px;
    font-size: 16px;
    color: rgba(110, 201, 18, 93%);
  }
`;

const impsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

const getPanelImages = (location: Location) => {
  var banner;

  switch (location.name) {
    case "Ghoulshead":
      banner = <img src={ghoulshead} alt={"banner"} className="bannerImage" />;
      break;
    case "Garrote":
      banner = <img src={garrote} alt={"banner"} className="bannerImage" />;
      break;
    case "South Haven Rigs":
      banner = (
        <img src={winterHarbor} alt={"banner"} className="bannerImage" />
      );
      break;
    default:
      banner = <div className="bannerImage" />;
  }

  return banner;
};

interface Props {
  activeLocation: Celestial | Sector | Site | Location;
  setActiveView: (view: View) => void;
  setActiveLocation: (location: Location | null) => void;
  expand: boolean;
  setExpand: (newValue: boolean) => void;
  align: "left" | "right";
}

export const PreviewPanel: React.FC<Props> = ({
  activeLocation,
  setActiveView,
  setActiveLocation,
  expand,
  setExpand,
  align,
}) => {
  return (
    <StyledPanelWrapper align={align}>
      <div className="locationPanel">
        <div className="bannerWrapper">{getPanelImages(activeLocation)}</div>
        <div
          style={{
            marginTop: "185px",
          }}
        >
          <Stack>
            {activeLocation.name === "Kora's Respite" ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => setActiveView("respiteSurface")}
              >
                {">>>  GO TO SURFACE  <<<"}
              </Button>
            ) : expand ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => setExpand(false)}
              >
                {align === "left" && "<<< "}
                {"CLOSE"}
                {align === "right" && " >>>"}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => setExpand(true)}
              >
                {align === "right" && "<<< "}
                {"EXPAND"}
                {align === "left" && " >>>"}
              </Button>
            )}
            <Typography className="locationTitle">
              {activeLocation?.name}
            </Typography>
            <Divider
              style={{
                borderColor: "rgba(104, 161, 24, 93%)",
              }}
            />
            <Typography className="locationDescription">{impsum}</Typography>
            <Divider
              style={{
                borderColor: "rgba(104, 161, 24, 93%)",
              }}
            />
            {/* <FactionControlBars factions={location.factions} /> */}
            {"sites" in activeLocation && (
              <PreviewPanelLocations
                selectedLocation={activeLocation}
                setSelectedLoc={setActiveLocation}
              />
            )}

            <Typography className="locationDescription">
              {activeLocation.description}
            </Typography>
          </Stack>
        </div>
      </div>
    </StyledPanelWrapper>
  );
};
