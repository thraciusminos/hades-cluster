import React from "react";
import {
  Box,
  Divider,
  styled,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LogEvent } from "../../../resources/eventUtils";
import { EventRow } from "./EventRow";

const StyledEventLog = styled(Box)`
  padding: 2px;
  background-color: rgba(104, 161, 24, 93%);
  clip-path: polygon(
    5% 0,
    95% 0,
    100% 5%,
    100% 95%,
    95% 100%,
    5% 100%,
    0 95%,
    0 5%
  );

  .eventLogBody {
    padding: 8px 16px 24px;
    background-color: #081406;
    clip-path: polygon(
      5% 0,
      95% 0,
      100% 5%,
      100% 95%,
      95% 100%,
      5% 100%,
      0 95%,
      0 5%
    );
  }

  .tableCell {
    font-size: 16px;
    font-family: monospace;
    text-transform: uppercase;
    color: rgba(122, 235, 52, 93%);
    border-bottom-color: rgba(122, 235, 52, 93%);
  }
`;

interface Props {
  events: LogEvent[];
}

export const EventLogBody: React.FC<Props> = ({ events }) => {
  return (
    <StyledEventLog>
      <div className="eventLogBody">
        <Table>
          <TableHead className="eventTable">
            <TableRow>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Forces</TableCell>
              <TableCell className="tableCell"></TableCell>
              <TableCell className="tableCell">Location</TableCell>
              <TableCell className="tableCell">Control</TableCell>
            </TableRow>
          </TableHead>
          {events.map((event) => (
            <EventRow event={event} />
          ))}
        </Table>
      </div>
    </StyledEventLog>
  );
};
