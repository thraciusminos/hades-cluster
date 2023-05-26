export type View = "minosSystem" | "respiteSurface";

export const getActiveViewTitle = (activeView: View) => {
  if (activeView === "minosSystem") {
    return "Minos System";
  }
  if (activeView === "respiteSurface") {
    return "Respite Surface Command";
  }
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
}

export interface Sector extends Location {
  sites?: Site[];
  factions?: { name: string; control: number }[];
}

export interface Site extends Location {
  factions: { name: string; control: number }[];
}
