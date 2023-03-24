import React, { useMemo } from "react";
import "./App.css";
import { Overlay } from "./components/overlay/Overlay";
import { RespiteSurface } from "./components/respiteSurface/RespiteSurface";
import { locations } from "./resources/control-initial/respiteLocations";
import { getCurrentSituation, getEvents } from "./resources/eventUtils";

function App() {
  const events = getEvents;
  const currentSituation = useMemo(
    () => getCurrentSituation(locations, events),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="App">
      <RespiteSurface currentSituation={currentSituation} />
      <Overlay events={events} />
    </div>
  );
}

export default App;
