import React from "react";
import styled from "styled-components";

import locIcon from "../../assets/icons/Maps-Define-Location-icon-green.png";
import { Location } from "./SurfaceUtils";
import { LocationTooltip } from "./LocationTooltip";

interface StyledProps {
  top: string;
  left: string;
  isSelected: boolean;
}

const StyledLocContainer = styled.div<StyledProps>`
  position: absolute;
  z-index: 2;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: ${(props) => (props.isSelected ? "42px" : "32px")};
  height: ${(props) => (props.isSelected ? "42px" : "32px")};
  margin: ${(props) => (props.isSelected ? "-21px" : "-16px")};
  background-color: transparent;
  border: none;
  border-radius: 50%;
  ${(props) =>
    props.isSelected && "outline: 3px solid rgba(122, 235, 52, 70%)"};

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
    border-radius: 50%;
    ${(props) =>
      props.isSelected
        ? "animation: spin infinite 10s linear"
        : "animation: outline-out 0.25s linear"};
  }

  .markerIcon:hover {
    width: 42px;
    height: 42px;
    animation: spin infinite 10s linear;
    ${(props) =>
      props.isSelected
        ? "animation: spin infinite 10s linear"
        : "animation: outline-in 0.5s ease-in-out"};
    outline: 3px solid rgba(122, 235, 52, 70%);
  }

  @keyframes outline-in {
    from {
      outline: 3px solid rgba(122, 235, 52, 10%);
      outline-offset: 24px;
    }
    to {
      width: 42px;
      height: 42px;
      outline: 3px solid rgba(122, 235, 52, 70%);
    }
  }

  @keyframes outline-out {
    from {
      outline: 3px solid rgba(122, 235, 52, 70%);
    }
    to {
      outline: 3px solid rgba(122, 235, 52, 10%);
      outline-offset: 24px;
    }
  }
`;

interface Props {
  location: Location;
  isSelected: boolean;
  setSelectedLoc: (location: Location | null) => void;
}

export const LocationMarker: React.FC<Props> = ({
  location,
  isSelected,
  setSelectedLoc,
}) => {
  return (
    <StyledLocContainer
      top={location.top}
      left={location.left}
      isSelected={isSelected}
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
