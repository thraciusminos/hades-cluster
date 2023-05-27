import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  getCurrentSituation,
  getLogEvents,
  getUpdatedSiteStatus,
} from "@resources/eventUtils";
import { respiteZones } from "@resources/control-initial/respiteZones";
import { respiteSites } from "@resources/control-initial/respiteSites";
import { Celestial, Location, Sector, View } from "@resources/locationUtils";
import { RespiteSurface } from "../respite-surface/RespiteSurface";
import { MinosSystem } from "../minos-system/MinosSystem";
import { Overlay } from "../overlay/Overlay";

const StyledViewer = styled.div`
  height: 90%;
  width: 94%;
`;

export const HadesClusterViewer: React.FC = () => {
  const [activeView, setActiveView] = useState<View>("minosSystem");
  const [activeLocation, setActiveLocation] = useState<
    Celestial | Sector | null
  >(null);

  const events = getLogEvents;
  const updatedLocations = useMemo(() => {
    if (activeView === "respiteSurface") {
      const updatedZones = getCurrentSituation(respiteZones, events);
      const updatedSites = getUpdatedSiteStatus(respiteSites, updatedZones);
      console.log("Viewer: updatedData:", updatedZones, updatedSites);
      return { updatedZones, updatedSites };
    }
    return { respiteZones, respiteSites };
  }, [activeView, events]);

  const handleViewChange = (view: View, location?: Location) => {
    setActiveLocation(location || null);
    setActiveView(view);
  };

  return (
    <StyledViewer>
      {activeView === "minosSystem" ? <MinosSystem /> : <RespiteSurface />}

      <Overlay
        events={events}
        sites={updatedLocations.updatedSites}
        controlZones={updatedLocations.updatedZones}
        activeView={activeView}
        setActiveView={handleViewChange}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
    </StyledViewer>
  );
};
