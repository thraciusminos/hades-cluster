import React, { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import styled from "styled-components";

import respiteSystem from "../../assets/respite-system-background.jpg";
import { Location } from "../../resources/locationUtils";
import { SectorPanel } from "../respiteSurface/SectorPanel";
import { LocationMarker } from "../respiteSurface/LocationMarker";

const StyledSurfaceContainer = styled.div`
  height: 90%;
  width: 94%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

interface Props {
  currentSituation: { [x: string]: Location };
}

export const RespiteSystem: React.FC<Props> = ({
  currentSituation: locations,
}) => {
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null);

  const getPanelAlignment = (selectedLoc: Location) =>
    Number(selectedLoc.left) > 50 ? "left" : "right";

  const handleLocClick = (location: Location | null) => {
    if (location?.name === selectedLoc?.name) {
      setSelectedLoc(null);
    } else {
      setSelectedLoc(location);
    }
  };

  const getSectorLocations = (sector: string) => {
    const sectorLocations = Object.keys(locations)
      .filter((locName) => {
        return (
          (locations as Record<string, Location>)[locName].sector === sector
        );
      })
      .map((locName) => (locations as Record<string, Location>)[locName]);
    return sectorLocations;
  };

  return (
    <StyledSurfaceContainer>
      <ClickAwayListener onClickAway={() => setSelectedLoc(null)}>
        <div className="locationLayer">
          {selectedLoc && (
            <SectorPanel
              align={getPanelAlignment(selectedLoc)}
              locations={getSectorLocations(selectedLoc.sector)}
              selectedLocation={selectedLoc}
              setSelectedLoc={handleLocClick}
            />
          )}

          {Object.values(locations).map((location) => {
            return (
              <LocationMarker
                key={location.name}
                location={location}
                isSelected={location.name === selectedLoc?.name}
                setSelectedLoc={handleLocClick}
              />
            );
          })}
        </div>
      </ClickAwayListener>
      <img
        src={respiteSystem}
        alt="respite"
        height="100%"
        width="100%"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "inherit",
          width: "inherit",
        }}
      />
    </StyledSurfaceContainer>
  );
};
