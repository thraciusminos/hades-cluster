import React from "react";
import { Box, Divider, styled, Typography } from "@mui/material";
import { ScenarioEvent } from "../../../resources/events";
import { EventRow } from "./EventRow";

const StyledEventLog = styled(Box)`
  padding: 2px;
  background-color: rgba(104, 161, 24, 93%);
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );

  .eventLogBody {
    background-color: #081406;
    clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 20%,
      100% 80%,
      80% 100%,
      20% 100%,
      0% 80%,
      0% 20%
    );
  }
`;

interface Props {
  events: ScenarioEvent[];
}

export const EventLogBody: React.FC<Props> = ({ events }) => {
  return (
    <StyledEventLog>
      <div className="eventLogBody">
        <Typography
          sx={{
            padding: "12px 16px",
            color: "rgba(122, 235, 52, 93%)",
            fontSize: "18px",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          Events
        </Typography>

        <Divider
          style={{
            borderColor: "rgba(104, 161, 24, 93%)",
          }}
        />

        {events.map((event) => (
          <EventRow event={event} />
        ))}
      </div>
    </StyledEventLog>
  );
};
