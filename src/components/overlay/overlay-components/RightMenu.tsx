import React from "react";
import { Box, Stack, styled } from "@mui/material";
import { EventLogButton } from "./EventLogButton";
import { EventLogBody } from "./EventLogBody";
import { events } from "../../../resources/events";

const StyledRightMenuWrapper = styled(Box)`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 10;
`;

export const RightMenu: React.FC = () => {
  return (
    <StyledRightMenuWrapper>
      <Stack direction="row-reverse">
        <EventLogButton />
      </Stack>
      <EventLogBody events={events} />
    </StyledRightMenuWrapper>
  );
};
