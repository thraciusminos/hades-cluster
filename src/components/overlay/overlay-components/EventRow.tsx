import { Stack, Paper, Typography } from "@mui/material";
import { ScenarioEvent } from "../../../resources/events";

interface Props {
  event: ScenarioEvent;
}

export const EventRow: React.FC<Props> = ({ event }) => {
  return (
    <Stack direction="row">
      <Paper>{event.date.toUTCString()}</Paper>
      {event.players.map((player) => {
        return (
          <Paper>
            <Typography>
              {player.side} {player.faction}
            </Typography>
          </Paper>
        );
      })}
      <Paper>{event.impact.delta}</Paper>
    </Stack>
  );
};
