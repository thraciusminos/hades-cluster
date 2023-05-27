import React from "react";
import styled from "styled-components";

import locIcon from "../../assets/icons/Maps-Define-Location-icon-green.png";
import { Location, Site } from "../../resources/locationUtils";
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
import { Box } from "@mui/material";

interface StyledProps {
  top: string;
  left: string;
  isSelected: boolean;
}

const StyledLocContainer = styled.div<StyledProps>`
  margin: 30px 0 12px;

  .locationIconContainer {
    width: 36px;
    height: 36px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    ${(props) =>
      props.isSelected && "outline: 3px solid rgba(122, 235, 52, 70%)"};
  }

  .markerIconCommon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: rgba(122, 235, 52, 100%);
    animation: outline-out 0.15s linear;
  }

  .markerIconCommon:hover {
    animation: outline-in 0.3s ease-in-out;
    outline: 3px solid rgba(122, 235, 52, 70%);
  }

  .markerIcon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${(props) =>
      props.isSelected
        ? "animation: spin infinite 10s linear"
        : "animation: outline-out 0.15s linear"};
  }

  .markerIcon:hover {
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
  location: Site;
  isSelected: boolean;
  setSelectedLoc: (location: Site | null) => void;
  style?: React.CSSProperties;
}

export const LocationIcon: React.FC<Props> = ({
  location,
  isSelected,
  setSelectedLoc,
  style,
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
      style={style}
    >
      <Box className="locationIconContainer">{getMarkerIcon(location)}</Box>
    </StyledLocContainer>
  );
};
