import React, { useMemo, useState } from "react";
import { respiteSurfaceLocations } from "../../resources/control-initial/respiteSurfaceLocations";
import { celestialLocations } from "../../resources/control-initial/celestialLocations";
import { getCurrentSituation, getEvents } from "../../resources/eventUtils";
import { Overlay } from "../overlay/Overlay";
import { RespiteSurface } from "../respite-surface/RespiteSurface";
import { RespiteSystem } from "../respite-system/RespiteSystem";
import { Location, View } from "../../resources/locationUtils";
import styled from "styled-components";

const StyledViewer = styled.div`
  height: 90%;
  width: 94%;
`;

export const HadesClusterViewer: React.FC = () => {
  const [activeView, setActiveView] = useState<View>("respiteSystem");
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  const events = getEvents;
  const currentSurfaceSituation = useMemo(
    () => getCurrentSituation(respiteSurfaceLocations, events),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <StyledViewer>
      {activeView === "respiteSystem" ? <RespiteSystem /> : <RespiteSurface />}

      <Overlay
        events={events}
        situation={currentSurfaceSituation}
        activeView={activeView}
        setActiveView={setActiveView}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
    </StyledViewer>
  );
};
