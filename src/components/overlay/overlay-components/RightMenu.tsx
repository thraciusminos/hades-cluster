import React, { useState } from "react";
import { Box, ClickAwayListener, Stack, styled } from "@mui/material";
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
  const [open, setOpen] = useState<boolean>();
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <StyledRightMenuWrapper>
        <Stack direction="row-reverse">
          <EventLogButton setOpen={() => setOpen(!open)} />
        </Stack>
        {open && <EventLogBody events={events} />}
      </StyledRightMenuWrapper>
    </ClickAwayListener>
  );
};
