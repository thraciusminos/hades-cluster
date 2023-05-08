import { Typography, styled, TableRow, TableCell } from "@mui/material";
import { LogEvent } from "../../../resources/eventUtils";

const StyledEventRow = styled(TableRow)`
  padding: 18px 12px;

  .eventRowLabel {
    color: rgba(122, 235, 52, 93%);
    background-color: #081406;
    border-bottom-color: transparent;
  }
`;

interface Props {
  event: LogEvent;
}

export const EventRow: React.FC<Props> = ({ event }) => {
  return (
    <StyledEventRow>
      <TableCell className="eventRowLabel">
        {event.date.toISOString().slice(0, 10)}
      </TableCell>
      {event.players.map((player) => {
        return (
          <TableCell className="eventRowLabel">{player.faction}</TableCell>
        );
      })}
      <TableCell className="eventRowLabel">{event.impact.location}</TableCell>
      <TableCell className="eventRowLabel">
        {event.impact.faction} {event.impact.delta > 0 ? "+" : ""}
        {event.impact.delta}
      </TableCell>
    </StyledEventRow>
  );
};
