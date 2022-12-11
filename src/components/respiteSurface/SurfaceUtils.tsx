export interface Location {
  top: string;
  left: string;
  name: string;
  description: string;
  factions: { name: string; control: number }[];
}
