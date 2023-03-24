import React, { useState } from "react";
import { Box, ClickAwayListener, Stack, styled } from "@mui/material";
import { EventLogButton } from "./EventLogButton";
import { EventLogBody } from "./EventLogBody";
import { ScenarioEvent } from "../../../resources/eventUtils";

const StyledRightMenuWrapper = styled(Box)`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 10;
`;

interface Props {
  events: ScenarioEvent[];
}

export const RightMenu: React.FC<Props> = ({ events }) => {
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
