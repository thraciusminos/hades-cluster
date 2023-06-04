import styled from "styled-components";
import { Tooltip, TooltipProps, tooltipClasses, Box } from "@mui/material";
import { Location } from "@app/resources/locationUtils";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    color: "rgba(110, 201, 18, 93%)",
    border: "transparent",
  },
}));

interface Props {
  indicator: JSX.Element;
  location: Location;
}

export const IndicatorTooltip: React.FC<
  Props & Omit<TooltipProps, "title">
> = ({ indicator, location, children, ...props }) => {
  return (
    <HtmlTooltip {...props} open title={<Box>{indicator}</Box>}>
      {children}
    </HtmlTooltip>
  );
};
