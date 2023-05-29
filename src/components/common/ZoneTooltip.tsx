import styled from "styled-components";
import {
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Box,
  Typography,
} from "@mui/material";
import { ControlZone } from "@resources/locationUtils";
import { FactionControlBars } from "./FactionControlBars";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(34, 38, 35, 93%)",
    color: "rgba(110, 201, 18, 93%)",
    maxWidth: 220,
    border: "1px solid black",
  },
  [`& .${tooltipClasses.tooltipArrow}`]: {
    backgroundColor: "rgba(34, 38, 35, 93%)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    "&:before": {
      border: `1px solid black`,
    },
  },
}));

interface Props {
  zone: ControlZone;
}

export const ZoneTooltip: React.FC<Props & Omit<TooltipProps, "title">> = ({
  zone,
  children,
  ...props
}) => {
  return (
    <HtmlTooltip
      {...props}
      arrow
      open
      title={
        <Box>
          <Typography
            fontSize={11}
            fontWeight="bold"
            textAlign="center"
            pb={0.5}
          >
            {zone.name}
          </Typography>
          <FactionControlBars factions={zone.factions} />
        </Box>
      }
    >
      {children}
    </HtmlTooltip>
  );
};
