import {
  AlignHorizontalCenter,
  Diversity2,
  Flare,
  LocalActivity,
  LocalPolice,
  QuestionMark,
  Token,
  Webhook,
} from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";

export type FactionIcons =
  | "imperial"
  | "rdf"
  | "mechanicus"
  | "chaos"
  | "xenos"
  | "militia"
  | "renegade"
  | "tribal"
  | "cult"
  | "unity-cult"
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
    case "imperial":
      return <Token sx={sx} />;
    case "rdf":
      return <LocalPolice sx={sx} />;
    case "militia":
      return <LocalActivity sx={sx} />;
    case "tribal":
      return <AlignHorizontalCenter sx={sx} />;
    case "cult":
      return <Flare sx={sx} />;
    case "unity-cult":
      return <Diversity2 sx={sx} />;
    case "xenos":
      return <Webhook sx={sx} />;
    default:
      return <QuestionMark sx={sx} />;
  }
};
