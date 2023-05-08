import React, { useMemo, useState } from "react";
import { respiteSurfaceLocations } from "../../resources/control-initial/respiteSurfaceLocations";
import { celestialLocations } from "../../resources/control-initial/celestialLocations";
import { getCurrentSituation, getLogEvents } from "../../resources/eventUtils";
import { Overlay } from "../overlay/Overlay";
import { RespiteSurface } from "../respite-surface/RespiteSurface";
import { MinosSystem } from "../minos-system/MinosSystem";
import { Location, View } from "../../resources/locationUtils";
import styled from "styled-components";

const StyledViewer = styled.div`
  height: 90%;
  width: 94%;
`;

export const HadesClusterViewer: React.FC = () => {
  const [activeView, setActiveView] = useState<View>("respiteSystem");
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  const events = getLogEvents;
  const currentSituation = useMemo(() => {
    if (activeView === "respiteSurface") {
      return getCurrentSituation(respiteSurfaceLocations, events);
    }
    return getCurrentSituation(celestialLocations, events);
  }, [activeView, events]);

  const handleViewChange = (view: View) => {
    setActiveLocation(null);
    setActiveView(view);
  };

  return (
    <StyledViewer>
      {activeView === "respiteSystem" ? <MinosSystem /> : <RespiteSurface />}

      <Overlay
        events={events}
        situation={currentSituation}
        activeView={activeView}
        setActiveView={handleViewChange}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
    </StyledViewer>
  );
};
