import { celestialLocations } from "./control-initial/celestialLocations";
import { respiteSectors } from "./control-initial/respiteSectors";

export type View = "minosSystem" | "respiteSurface";

export const getActiveViewTitle = (activeView: View) => {
  if (activeView === "minosSystem") {
    return "Minos System";
  }
  if (activeView === "respiteSurface") {
    return "Respite Surface Command";
  }
};

export const useSectors = (activeView: View) => {
  if (activeView === "minosSystem") {
    return celestialLocations;
  }
  if (activeView === "respiteSurface") {
    return respiteSectors;
  }
  return {};
};

export interface Location {
  top: string;
  left: string;
  name: string;
  description?: string;
  category?: string;
}

export interface Celestial extends Location {
  view?: View;
  sites?: string[];
}

export interface Sector extends Location {
  sites?: string[];
}

export interface Site extends Location {
  factions: string[];
  controllingFaction?: string;
  controlZones?: string[];
}

export interface ControlZone extends Location {
  factions: { name: string; control: number }[];
}