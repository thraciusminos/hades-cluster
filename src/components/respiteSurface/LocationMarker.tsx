import React from "react";
import styled from "styled-components";

import locIcon from "../../assets/icons/Maps-Define-Location-icon-green.png";
import { Location } from "./SurfaceUtils";
import { LocationTooltip } from "./LocationTooltip";
import {
  Apartment,
  Factory,
  Gite,
  LocationCity,
  MapsHomeWork,
  SelectAll,
  Style,
  TempleHindu,
} from "@mui/icons-material";

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

  .markerIconCommon {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    margin: -50%;
    border-radius: 50%;
    color: rgba(122, 235, 52, 100%);
    animation: outline-out 0.15s linear;
  }

  .markerIconCommon:hover {
    width: 42px;
    height: 42px;
    animation: outline-in 0.3s ease-in-out;
    outline: 3px solid rgba(122, 235, 52, 70%);
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
        : "animation: outline-out 0.15s linear"};
  }

  .markerIcon:hover {
    width: 42px;
    height: 42px;
    animation: spin infinite 10s linear;
    ${(props) =>
      props.isSelected
        ? "animation: spin infinite 10s linear"
        : "animation: outline-in 0.3s ease-in-out"};
    outline: 3px solid rgba(122, 235, 52, 70%);
  }

  @keyframes outline-in {
    from {
      outline: 3px solid rgba(122, 235, 52, 10%);
      outline-offset: 22px;
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
      outline-offset: 22px;
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
  const getMarkerIcon = (location: Location) => {
    switch (location.category) {
      case "hive":
        return <TempleHindu className="markerIconCommon" />;
      case "city":
        return <Apartment className="markerIconCommon" />;
      // return <LocationCity className="markerIconCommon"/>;
      // return <MapsHomeWork className="markerIconCommon"/>;
      // return <Gite className="markerIconCommon"/>;

      case "settlement":
        return <Gite className="markerIconCommon" />;
      case "factory":
        return <Factory className="markerIconCommon" />;
      case "outpost":
        return <SelectAll className="markerIconCommon" />;
      case "site":
      default:
        return (
          <img
            src={locIcon}
            alt={location.name || "location"}
            className="markerIcon"
          />
        );
    }
  };

  return (
    <StyledLocContainer
      top={location.top}
      left={location.left}
      isSelected={isSelected}
      onClick={() => setSelectedLoc(location)}
    >
      <LocationTooltip location={location}>
        {getMarkerIcon(location)}
      </LocationTooltip>
    </StyledLocContainer>
  );
};
