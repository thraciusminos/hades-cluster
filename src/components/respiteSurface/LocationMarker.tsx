import React from "react";
import styled from "styled-components";

import locIcon from "../../assets/icons/Maps-Define-Location-icon-green.png";
import { Location } from "./SurfaceUtils"
import { LocationTooltip } from "./LocationTooltip";

interface StyledProps {
  top: string;
  left: string;
}

const StyledLocContainer = styled.div<StyledProps>`
  position: absolute;
  z-index: 2;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 32px;
  height: 32px;
  margin: -16px;
  background-color: transparent;
  border: none;

  &:hover {
    margin: -21px;
  }

  .markerIcon {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    margin: -50%;
  }

  .markerIcon:hover {
    width: 42px;
    height: 42px;
    animation: spin infinite 10s linear;
  }
`;

interface Props {
  location: { top: string; left: string; name: string };
  setSelectedLoc: (location: Location) => void;
}

export const LocationMarker: React.FC<Props> = ({
  location,
  setSelectedLoc,
}) => {
  return (
    <StyledLocContainer
      top={location.top}
      left={location.left}
      onClick={() => setSelectedLoc(location)}
    >
      <LocationTooltip location={location}>
        <img
          src={locIcon}
          alt={location.name || "location"}
          className="markerIcon"
        />
      </LocationTooltip>
    </StyledLocContainer>
  );
};
