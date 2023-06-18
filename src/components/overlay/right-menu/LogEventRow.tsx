import { respiteZones } from "@app/resources/control-initial/respiteZones";
import {
  styled,
  TableRow,
  TableCell,
  Box,
  Stack,
  Typography,
} from "@mui/material";
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
  const evenFactions = event.players.filter((player) => player.side % 2 === 0);
  const oddFactions = event.players.filter((player) => player.side % 2 === 1);

  return (
    <StyledEventRow>
      <TableCell className="eventRowLabel">
        {event.date.toISOString().slice(0, 10)}
      </TableCell>
      <TableCell className="eventRowLabel">
        {oddFactions.map((player) => (
          <Box>{player.faction}</Box>
        ))}
      </TableCell>
      <TableCell className="eventRowLabel">
        {evenFactions.map((player) => (
          <Box>{player.faction}</Box>
        ))}
      </TableCell>
      <TableCell className="eventRowLabel">
        <Stack>
          {respiteZones[event.location].name}
          <Box>Davis Plantation</Box>
        </Stack>
      </TableCell>
      <TableCell className="eventRowLabel">
        {event.impacts.map((impact) => (
          <Box>
            {impact.faction} {impact.delta > 0 ? "+" : ""}
            {impact.delta}
          </Box>
        ))}
      </TableCell>
    </StyledEventRow>
  );
};
