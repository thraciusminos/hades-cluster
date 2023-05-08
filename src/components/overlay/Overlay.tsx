import React, { useState } from "react";
import { Box, Button, ClickAwayListener, Typography } from "@mui/material";
import styled from "styled-components";
import { RightMenu } from "./right-menu/RightMenu";
import { LogEvent } from "../../resources/eventUtils";
import {
  Celestial,
  Location,
  Sector,
  Site,
  View,
} from "../../resources/locationUtils";
import { PreviewPanel } from "./preview-panel/PreviewPanel";
import { LocationMarker } from "../common/LocationMarker";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Expand } from "./Expand";

const StyledSurfaceContainer = styled.div`
  height: 100%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

const getActiveViewTitle = (activeView: View) => {
  if (activeView === "respiteSystem") {
    return "Minos System";
  }
  if (activeView === "respiteSurface") {
    return "Respite Surface Command";
  }
};

interface Props {
  events: LogEvent[];
  situation: { [x: string]: Celestial | Sector | Site | Location };
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
  const [expand, setExpand] = useState<boolean>(false);

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
      <Box
        sx={{
          position: "absolute",
          top: "3%",
          left: "2%",
          backgroundColor: "#081406",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 90% 100%, 0 100%)",
          zIndex: 10,
        }}
      >
        {activeView !== "respiteSystem" && (
          <Button onClick={() => setActiveView("respiteSystem")}>
            <ArrowBackIosNew
              sx={{
                color: "rgba(122, 235, 52, 93%)",
                padding: "0 6px",
                fontSize: "16px",
              }}
            />
            <Typography
              sx={{
                color: "rgba(122, 235, 52, 93%)",
                fontSize: "16px",
                fontFamily: "monospace",
              }}
            >
              Back to System
            </Typography>
          </Button>
        )}
        <Typography
          sx={{
            padding: "0 64px 18px 28px",
            color: "rgba(122, 235, 52, 93%)",
            fontSize: "28px",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          {getActiveViewTitle(activeView)}
        </Typography>
      </Box>

      <RightMenu events={events} />

      <ClickAwayListener onClickAway={() => setActiveLocation(null)}>
        <div className="locationLayer">
          {activeLocation && (
            <PreviewPanel
              activeLocation={activeLocation}
              setActiveView={setActiveView}
              setActiveLocation={handleLocClick}
              expand={expand}
              setExpand={setExpand}
              align={getPanelAlignment(activeLocation)}
            />
          )}

          {activeLocation && expand && (
            <Expand
              activeLocation={activeLocation}
              setActiveLocation={handleLocClick}
              previewAlignment={getPanelAlignment(activeLocation)}
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
