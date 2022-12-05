import React from "react";
import styled from "styled-components";
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: "14px",
    border: "1px solid #dadde9",
  },
}));

interface Props {
  location: { top: string; left: string; name: string };
  children: JSX.Element;
}

export const LocationTooltip: React.FC<Props> = ({ location, children }) => {
  return <HtmlTooltip title={location.name} arrow>{children}</HtmlTooltip>;
};
