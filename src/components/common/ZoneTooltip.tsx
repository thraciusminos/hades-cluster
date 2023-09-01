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
import { EventIconsRow } from "./EventIconsRow";
import { ReactNode } from "react";

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
  eventIcon?: ReactNode;
  eventIconDepleted?: ReactNode;
  eventIconSuccessful?: ReactNode;
}

export const ZoneTooltip: React.FC<Props & Omit<TooltipProps, "title">> = ({
  zone,
  eventIcon,
  eventIconDepleted,
  eventIconSuccessful,
  children,
  ...props
}) => {
  const shouldDisplayEventIcons =
    (zone.eventItems || zone.depletedItems) && eventIcon;

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
          {shouldDisplayEventIcons && (
            <EventIconsRow
              openItems={zone.eventItems || 0}
              depletedItems={zone.depletedItems || 0}
              successsfulItems={zone.successfulItems || 0}
              eventIcon={eventIcon}
              eventIconDepleted={eventIconDepleted}
              eventIconSuccessful={eventIconSuccessful}
              boxProps={{ gap: 0.5, justifyContent: "center" }}
            />
          )}
        </Box>
      }
    >
      {children}
    </HtmlTooltip>
  );
};
