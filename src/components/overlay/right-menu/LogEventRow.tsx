import { styled, TableRow, TableCell } from "@mui/material";
import { LogEvent } from "@resources/eventUtils";

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

export const LogEventRow: React.FC<Props> = ({ event }) => {
  return (
    <StyledEventRow>
      <TableCell className="eventRowLabel">
        {event.date.toISOString().slice(0, 10)}
      </TableCell>
      {event.players.map((player) => {
        return (
          <TableCell
            className="eventRowLabel"
            key={event.players.indexOf(player)}
          >
            {player.faction}
          </TableCell>
        );
      })}
      <TableCell className="eventRowLabel">{event.location}</TableCell>
      {event.impacts.map((impact) => (
        <TableCell
          className="eventRowLabel"
          key={event.impacts.indexOf(impact)}
        >
          {impact.faction} {impact.delta > 0 ? "+" : ""}
          {impact.delta}
        </TableCell>
      ))}
    </StyledEventRow>
  );
};
