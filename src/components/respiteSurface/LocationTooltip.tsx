import React from "react";
import styled from "styled-components";
import { Location } from "../../resources/locationUtils";
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(34, 38, 35, 93%)",
    color: "rgba(110, 201, 18, 93%)",
    maxWidth: 220,
    fontSize: "14px",
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
  location: Location | null;
  children: JSX.Element;
}

export const LocationTooltip: React.FC<Props> = ({ location, children }) => {
  return (
    <HtmlTooltip title={location?.name} arrow>
      {children}
    </HtmlTooltip>
  );
};
