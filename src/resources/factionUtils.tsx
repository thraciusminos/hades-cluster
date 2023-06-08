import {
  AlignHorizontalCenter,
  Flare,
  LocalPolice,
  QuestionMark,
} from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";

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
  short?: string;
  description?: string;
  icon?: FactionIcons;
  color?: string;
  bgColor?: string;
  meta?: string;
}

export const getFactionIcon = (
  icon: FactionIcons | undefined,
  sx?: SxProps<Theme>
) => {
  switch (icon) {
    case "militia":
      return <LocalPolice sx={sx} />;
    case "tribal":
      return <AlignHorizontalCenter sx={sx} />;
    case "cult":
      return <Flare sx={sx} />;
    default:
      return <QuestionMark sx={sx} />;
  }
};
