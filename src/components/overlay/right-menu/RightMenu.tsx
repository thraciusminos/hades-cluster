import React, { useState } from "react";
import { Box, ClickAwayListener, Stack, styled } from "@mui/material";
import { LogEvent } from "../../../resources/eventUtils";
import { RightMenuButton } from "./RightMenuButton";
import { RightMenuBody } from "./RightMenuBody";
import { LogEventTable } from "./LogEventTable";
import { ScenarioEventCard } from "./ScenarioEventCard";
import { useScenarioEvents } from "../../../resources/events/scenarioEvents";
import { View, Location } from "../../../resources/locationUtils";

const StyledRightMenuWrapper = styled(Box)`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 10;
`;

export type Menus = "events" | "log" | null;

interface Props {
  events: LogEvent[];
  setActiveView: (view: View, location?: Location) => void;
  setActiveLocation: (location: Location | null) => void;
}

export const RightMenu: React.FC<Props> = ({
  events,
  setActiveView,
  setActiveLocation,
}) => {
  const [open, setOpen] = useState<Menus>();
  const scenarioEvents = useScenarioEvents();

  const handleButtonClick = (target: Menus) => {
    return open === target ? setOpen(null) : setOpen(target);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(null)}>
      <StyledRightMenuWrapper>
        <Stack direction="row-reverse" gap="12px" pb="12px">
          <RightMenuButton
            label="Log"
            setOpen={() => handleButtonClick("log")}
          />
          <RightMenuButton
            label="Events"
            setOpen={() => handleButtonClick("events")}
          />
        </Stack>
        {open === "log" && (
          <RightMenuBody>
            <LogEventTable events={events} />
          </RightMenuBody>
        )}
        {open === "events" && (
          <RightMenuBody>
            {scenarioEvents.map((event) => (
              <ScenarioEventCard
                key={event.title}
                event={event}
                setOpen={setOpen}
                setActiveView={setActiveView}
              />
            ))}
          </RightMenuBody>
        )}
      </StyledRightMenuWrapper>
    </ClickAwayListener>
  );
};
