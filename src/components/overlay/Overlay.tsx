import React from "react";
import { ClickAwayListener, Typography } from "@mui/material";
import styled from "styled-components";
import { RightMenu } from "./right-menu/RightMenu";
import { ScenarioEvent } from "../../resources/eventUtils";
import { Location, View } from "../../resources/locationUtils";
import { PreviewPanel } from "./preview-panel/PreviewPanel";
import { LocationMarker } from "../common/LocationMarker";

const StyledSurfaceContainer = styled.div`
  height: 100%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

const getActiveViewTitle = (activeView: View) => {
  if (activeView === "respiteSystem") {
    return "Kora's Respite System";
  }
  if (activeView === "respiteSurface") {
    return "Respite Surface Command";
  }
};

interface Props {
  events: ScenarioEvent[];
  situation: { [x: string]: Location };
  activeView: View;
  setActiveView: (view: View) => void;
  activeLocation: Location | null;
  setActiveLocation: (location: Location | null) => void;
}

export const Overlay: React.FC<Props> = ({
  events,
  situation,
  activeView,
  setActiveView,
  activeLocation,
  setActiveLocation,
}) => {
  const getPanelAlignment = (targetLocation: Location) =>
    Number(targetLocation.left) > 50 ? "left" : "right";

  const handleLocClick = (targetLocation: Location | null) => {
    if (targetLocation?.name === activeLocation?.name) {
      setActiveLocation(null);
    } else {
      setActiveLocation(targetLocation);
    }
  };

  return (
    <StyledSurfaceContainer>
      <Typography
        sx={{
          position: "absolute",
          top: "3%",
          left: "2%",
          padding: "12px 64px 18px 18px",
          color: "rgba(122, 235, 52, 93%)",
          backgroundColor: "#081406",
          fontSize: "28px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 90% 100%, 0 100%)",
          zIndex: 10,
        }}
      >
        {getActiveViewTitle(activeView)}
      </Typography>

      <RightMenu events={events} />

      <ClickAwayListener onClickAway={() => setActiveLocation(null)}>
        <div className="locationLayer">
          {activeLocation && (
            <PreviewPanel
              activeLocation={activeLocation}
              setActiveView={setActiveView}
              setActiveLocation={handleLocClick}
              align={getPanelAlignment(activeLocation)}
            />
          )}

          {Object.values(situation).map((location) => {
            return (
              <LocationMarker
                key={location.name}
                location={location}
                isSelected={location.name === activeLocation?.name}
                setSelectedLoc={handleLocClick}
              />
            );
          })}
        </div>
      </ClickAwayListener>
    </StyledSurfaceContainer>
  );
};
