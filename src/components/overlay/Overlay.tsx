import { useState } from "react";
import styled from "styled-components";
import { Box, Button, ClickAwayListener, Typography } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { LogEvent } from "@resources/eventUtils";
import {
  Celestial,
  getActiveViewTitle,
  Location,
  Sector,
  Site,
  View,
} from "@resources/locationUtils";
import { MapMarker } from "../common/MapMarker";
import { RightMenu } from "./right-menu/RightMenu";
import { PreviewPanel } from "./preview-panel/PreviewPanel";
import { Expand } from "./preview-panel/Expand";

const StyledSurfaceContainer = styled.div`
  height: 100%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

interface Props {
  events: LogEvent[];
  situation: { [x: string]: Celestial | Sector | Site | Location };
  activeView: View;
  setActiveView: (view: View, location?: Location) => void;
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
  const [activeSite, setActiveSite] = useState<Sector | Site | null>(null);

  const getPanelAlignment = (targetLocation: Location) =>
    Number(targetLocation.left) > 50 ? "left" : "right";

  const handleLocClick = (targetLocation: Location | null) => {
    if (targetLocation?.name === activeLocation?.name) {
      setActiveLocation(null);
    } else {
      setActiveLocation(targetLocation);
    }
  };

  const handleSiteClick = (targetSite: Sector | Site | null) => {
    if (targetSite?.name === activeSite?.name) {
      setActiveSite(null);
    } else {
      setActiveSite(targetSite);
    }
  };

  const handleAwayClick = () => {
    setActiveLocation(null);
    setActiveSite(null);
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
        {activeView !== "minosSystem" && (
          <Button onClick={() => setActiveView("minosSystem")}>
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

      <RightMenu
        events={events}
        setActiveView={setActiveView}
        setActiveLocation={setActiveLocation}
      />

      <ClickAwayListener onClickAway={() => handleAwayClick()}>
        <div className="locationLayer">
          {activeLocation && (
            <PreviewPanel
              align={getPanelAlignment(activeLocation)}
              expand={expand}
              activeSite={activeSite}
              activeLocation={activeLocation}
              setExpand={setExpand}
              setActiveView={setActiveView}
              setActiveSite={handleSiteClick}
            />
          )}

          {activeLocation && expand && (
            <Expand
              activeSite={activeSite}
              activeLocation={activeLocation}
              setActiveSite={handleSiteClick}
              previewAlignment={getPanelAlignment(activeLocation)}
            />
          )}

          {Object.values(situation).map((location) => {
            return (
              <MapMarker
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
