export interface Location {
  top: string;
  left: string;
  name: string;
  description: string;
  category: string;
  factions: { name: string; control: number }[];
}
