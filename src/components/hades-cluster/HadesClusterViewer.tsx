import React, { useMemo, useState } from "react";
import { respiteSurfaceLocations } from "../../resources/control-initial/respiteSurfaceLocations";
import { respiteSystemLocations } from "../../resources/control-initial/respiteSystemLocations";
import { getCurrentSituation, getEvents } from "../../resources/eventUtils";
import { Overlay } from "../overlay/Overlay";
import { RespiteSurface } from "../respiteSurface/RespiteSurface";
import { RespiteSystem } from "../respiteSystem/RespiteSystem";

export type Views = "respiteSystem" | "respiteSurface";

export const HadesClusterViewer: React.FC = () => {
  const [activeView, setActiveView] = useState<Views>("respiteSystem");

  const events = getEvents;
  const currentSystemSituation = useMemo(
    () => getCurrentSituation(respiteSystemLocations, events),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const currentSurfaceSituation = useMemo(
    () => getCurrentSituation(respiteSurfaceLocations, events),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="App">
      {activeView === "respiteSystem" ? (
        <RespiteSystem currentSituation={currentSystemSituation} />
      ) : (
        <RespiteSurface currentSituation={currentSurfaceSituation} />
      )}

      <Overlay
        events={events}
        activeView={activeView}
        setActiveView={setActiveView}
      />
    </div>
  );
};
