import React, { useState } from "react";
import { Box, ClickAwayListener, Stack, styled } from "@mui/material";
import { LogEvent } from "@resources/eventUtils";
import { RightMenuButton } from "./RightMenuButton";
import { RightMenuBody } from "./RightMenuBody";
import { LogEventTable } from "./LogEventTable";
import { ScenarioEventCard } from "./ScenarioEventCard";
import { useScenarioEvents } from "@resources/events/scenarioEvents";
import { View, Celestial, Sector } from "@resources/locationUtils";
import BloodshardHuntEvent from "@resources/events/BloodshardHunt";
import { WalkertownTroublesEvent } from "@app/resources/events/Walkertown Troubles";

const StyledRightMenuWrapper = styled(Box)`
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 10;
`;

export type Menus = "rules" | "events" | "log" | null;

interface Props {
  events: LogEvent[];
  activeView: View;
  setActiveView: (view: View) => void;
  setActiveLocation: (location: Celestial | Sector | null) => void;
}

export const RightMenu: React.FC<Props> = ({
  events,
  activeView,
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
          <RightMenuButton
            label="Event Rules"
            setOpen={() => handleButtonClick("rules")}
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
                activeView={activeView}
                setOpen={setOpen}
                setActiveView={setActiveView}
                setActiveLocation={setActiveLocation}
              />
            ))}
          </RightMenuBody>
        )}
        {open === "rules" && (
          <Stack rowGap={3} width="48vw">
            <RightMenuBody>
              <WalkertownTroublesEvent />
            </RightMenuBody>
            <RightMenuBody>
              <BloodshardHuntEvent />
            </RightMenuBody>
          </Stack>
        )}
      </StyledRightMenuWrapper>
    </ClickAwayListener>
  );
};
