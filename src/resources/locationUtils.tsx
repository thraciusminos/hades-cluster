export type View = "respiteSystem" | "respiteSurface";

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
