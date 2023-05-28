import { useState } from "react";
import styled from "styled-components";
import { Box, Button, ClickAwayListener, Typography } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { LogEvent } from "@resources/eventUtils";
import {
  getActiveViewTitle,
  useSectors,
  Location,
  Sector,
  Site,
  View,
  ControlZone,
  Celestial,
} from "@resources/locationUtils";
import { MapMarker } from "../common/MapMarker";
import { RightMenu } from "./right-menu/RightMenu";
import { PreviewPanel } from "./preview-panel/PreviewPanel";
import { Expand } from "./expand/Expand";

const StyledSurfaceContainer = styled.div`
  height: 100%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

interface Props {
  events: LogEvent[];
  sites: { [x: string]: Site } | undefined;
  controlZones: { [x: string]: ControlZone } | undefined;
  activeView: View;
  setActiveView: (view: View, location?: Celestial | Sector | null) => void;
  activeLocation: Celestial | Sector | null;
  setActiveLocation: (location: Celestial | Sector | null) => void;
}

export const Overlay: React.FC<Props> = ({
  events,
  sites,
  controlZones,
  activeView,
  setActiveView,
  activeLocation,
  setActiveLocation,
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [activeSite, setActiveSite] = useState<Site | null>(null);
  const sectors = useSectors(activeView);

  const localSites =
    activeLocation && sites
      ? Object.values(sites).filter((site) =>
          activeLocation.sites?.includes(site.name)
        )
      : [];

  const getPanelAlignment = (targetLocation: Location) =>
    Number(targetLocation.left) > 50 ? "left" : "right";

  const handleLocClick = (targetLocation: Celestial | Sector | null) => {
    if (targetLocation?.name === activeLocation?.name) {
      setActiveLocation(null);
    } else {
      setActiveLocation(targetLocation);
    }
  };

  const handleSiteClick = (targetSite: Site | null) => {
    if (targetSite?.name === activeSite?.name) {
      setActiveSite(null);
    } else {
      setExpand(true);
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
              sites={localSites}
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
              sites={localSites}
              controlZones={controlZones}
              activeSite={activeSite}
              activeLocation={activeLocation}
              setActiveSite={handleSiteClick}
              previewAlignment={getPanelAlignment(activeLocation)}
            />
          )}

          {Object.values(sectors).map((location) => {
            return (
              <MapMarker
                key={location.name}
                location={location}
                isSelected={location.name === activeLocation?.name}
                onClick={() => handleLocClick(location)}
              />
            );
          })}
        </div>
      </ClickAwayListener>
    </StyledSurfaceContainer>
  );
};
