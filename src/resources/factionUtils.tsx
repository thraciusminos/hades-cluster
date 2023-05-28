import {
  AlignHorizontalCenter,
  Flare,
  LocalPolice,
  QuestionMark,
} from "@mui/icons-material";

export type FactionIcons =
  | "imperial"
  | "mechanicus"
  | "chaos"
  | "xenos"
  | "militia"
  | "renegade"
  | "tribal"
  | "cult"
  | "civilian";

export interface Faction {
  name: string;
  description?: string;
  icon?: FactionIcons;
  color?: string;
  bgColor?: string;
  meta?: string;
}

export const getFactionIcon = (icon: FactionIcons | undefined) => {
  switch (icon) {
    case "militia":
      return <LocalPolice />;
    case "tribal":
      return <AlignHorizontalCenter />;
    case "cult":
      return <Flare />;
    default:
      return <QuestionMark />;
  }
};
