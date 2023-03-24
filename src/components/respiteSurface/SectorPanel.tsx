import React from "react";
import styled from "styled-components";

import winterHarbor from "../../assets/artwork/Koras-winter-harbor.jpg";
import { Divider, Stack, Typography } from "@mui/material";
import { Location } from "../../resources/locationUtils";
import { FactionControlBars } from "./FactionControlBars";
import { SectorPanelLocations } from "./SectorPanelLocation";

interface StyledProps {
  align: "left" | "right";
}

const StyledPanelWrapper = styled.div<StyledProps>`
  position: absolute;
  top: 10%;
  ${(props) => props.align}: 4%;
  width: 30%;
  min-height: 80%;
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
    top: 5px;
    left: 5px;
    right: 5px;
    height: 120px;

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

interface Props {
  locations: Location[];
  selectedLocation: Location;
  setSelectedLoc: (location: Location | null) => void;
  align: "left" | "right";
}

export const SectorPanel: React.FC<Props> = ({
  locations,
  selectedLocation,
  setSelectedLoc,
  align,
}) => {
  return (
    <StyledPanelWrapper align={align}>
      <div className="locationPanel">
        <div className="bannerWrapper">
          {locations[0].name === "South Haven Rigs" && (
            <img
              src={winterHarbor}
              alt={locations[0].name || "banner"}
              className="bannerImage"
            />
          )}
        </div>
        <div
          style={{
            marginTop: "105px",
          }}
        >
          <Stack>
            <Typography className="locationTitle">
              {locations[0]?.name}
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
            <SectorPanelLocations
              locations={locations}
              selectedLocation={selectedLocation}
              setSelectedLoc={setSelectedLoc}
            />

            <Typography className="locationDescription">
              {selectedLocation.description}
            </Typography>
          </Stack>
        </div>
      </div>
    </StyledPanelWrapper>
  );
};
