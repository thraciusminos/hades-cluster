import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import {
  Celestial,
  Location,
  Sector,
  Site,
} from "../../resources/locationUtils";
import ghoulsheadMap from "../../assets/artwork/ghoulshead/ghoulshead-map.png";
import ghoulsheadb1 from "../../assets/artwork/ghoulshead/ghoulshead-favela.png";
import ghoulsheadb2 from "../../assets/artwork/ghoulshead/ghoulshead-wetland.png";
import ghoulsheadb3 from "../../assets/artwork/ghoulshead/ghoulshead-wetland-2.png";
import garroteb1 from "../../assets/artwork/garrote/garrote-1.png";
import garroteb2 from "../../assets/artwork/garrote/garrote-2.png";
import garroteb3 from "../../assets/artwork/garrote/garrote-trucks.png";
import { LocationMarker } from "../common/LocationMarker";

interface StyledProps {
  align: "left" | "right";
}

const StyledExpandWrapper = styled.div<StyledProps>`
  position: absolute;
  top: 9%;
  ${(props) => props.align}: 34%;
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

  .bannerContainer {
    position: absolute;
    top: 3%;
    left: 5px;
    right: 5px;
    height: 120px;
  }

  .bannerImage {
    width: 30%;
    height: 120px;

    background-color: rgba(95, 97, 93, 93%);
  }

  .mapImage {
    width: 100%;
    height: 620px;
  }
`;

const getExpandImages = (location: Location) => {
  var map;
  var banner1;
  var banner2;
  var banner3;

  switch (location.name) {
    case "Ghoulshead":
      map = (
        <img src={ghoulsheadMap} alt={"locationMap"} className="mapImage" />
      );
      banner1 = (
        <img src={ghoulsheadb1} alt={"banner1"} className="bannerImage" />
      );
      banner2 = (
        <img src={ghoulsheadb2} alt={"banner2"} className="bannerImage" />
      );
      banner3 = (
        <img src={ghoulsheadb3} alt={"banner3"} className="bannerImage" />
      );
      break;
    case "Garrote":
      map = (
        <img src={ghoulsheadMap} alt={"locationMap"} className="mapImage" />
      );
      banner1 = <img src={garroteb1} alt={"banner1"} className="bannerImage" />;
      banner2 = <img src={garroteb2} alt={"banner2"} className="bannerImage" />;
      banner3 = <img src={garroteb3} alt={"banner3"} className="bannerImage" />;
      break;
    default:
      map = <div className="mapImage" />;
      banner1 = <div className="bannerImage" />;
      banner2 = <div className="bannerImage" />;
      banner3 = <div className="bannerImage" />;
  }

  return { map: map, banners: [banner1, banner2, banner3] };
};

interface Props {
  activeLocation: Celestial | Sector | Site | Location;
  setActiveLocation: (location: Location | null) => void;
  previewAlignment: "left" | "right";
}

export const Expand: React.FC<Props> = ({
  activeLocation,
  setActiveLocation,
  previewAlignment,
}) => {
  const expandImages = getExpandImages(activeLocation);
  return (
    <StyledExpandWrapper align={previewAlignment}>
      <div className="locationPanel">
        <div className="bannerContainer">
          <Box display="flex" flexDirection="row" justifyContent="space-evenly">
            {expandImages?.banners}
          </Box>
        </div>
        <div
          style={{
            marginTop: "150px",
          }}
        >
          {expandImages.map}
        </div>

        {"sites" in activeLocation &&
          activeLocation?.sites?.map((location) => {
            return (
              <LocationMarker
                key={location.name}
                location={location}
                isSelected={location.name === activeLocation?.name}
                setSelectedLoc={() => {}}
              />
            );
          })}
      </div>
    </StyledExpandWrapper>
  );
};
