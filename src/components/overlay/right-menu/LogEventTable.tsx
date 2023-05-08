import React from "react";
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LogEvent } from "../../../resources/eventUtils";
import { LogEventRow } from "./LogEventRow";

const StyledLogContainer = styled(Box)`
  .eventTable {
    max-height: 80vh;
  }

  .tableCell {
    font-size: 16px;
    font-family: monospace;
    text-transform: uppercase;
    color: rgba(122, 235, 52, 93%);
    background-color: #081406;
    border-bottom-color: rgba(122, 235, 52, 93%);
  }
`;

interface Props {
  events: LogEvent[];
}

export const LogEventTable: React.FC<Props> = ({ events }) => {
  return (
    <StyledLogContainer>
      <TableContainer className="eventTable">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Forces</TableCell>
              <TableCell className="tableCell"></TableCell>
              <TableCell className="tableCell">Location</TableCell>
              <TableCell className="tableCell">Control</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <LogEventRow event={event} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledLogContainer>
  );
};
