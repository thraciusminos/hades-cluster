import React, { useState } from "react";
import styled from "styled-components";

import respite from "../../assets/respite-holo-display-sharp.jpg";
import { locations } from "./respiteLocations";
import { Location } from "./SurfaceUtils";
import { LocationMarker } from "./LocationMarker";
import { LocationPanel } from "./LocationPanel";

const StyledSurfaceContainer = styled.div`
  height: 90%;
  width: 94%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

interface Props {}

export const RespiteSurface: React.FC<Props> = (props) => {
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

  return (
    <StyledSurfaceContainer>
      <div className="locationLayer">
        {selectedLoc && (
          <LocationPanel
            align={getPanelAlignment(selectedLoc)}
            location={selectedLoc}
            setSelectedLoc={handleLocClick}
          />
        )}

        {Object.values(locations).map((location) => {
          return (
            <LocationMarker
              location={location}
              isSelected={location.name === selectedLoc?.name}
              setSelectedLoc={handleLocClick}
            />
          );
        })}
      </div>
      <img
        src={respite}
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
