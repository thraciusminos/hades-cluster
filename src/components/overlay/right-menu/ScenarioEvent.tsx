import { styled, Paper, Typography } from "@mui/material";
import { ScenarioEvent } from "../../../resources/eventUtils";

const StyledEvent = styled(Paper)`
  width: 36vw;
  padding: 24px 16px;
  background-color: #081406;
  border: 1px solid rgba(122, 235, 52, 93%);
  border-radius: 8px;

  .eventTitle {
    padding-bottom: 12px;
    color: rgba(122, 235, 52, 93%);
  }

  .eventDescription {
    color: rgba(122, 235, 52, 93%);
  }
`;

interface Props {
  event: ScenarioEvent;
}

export const ScenarioEventCard: React.FC<Props> = ({ event }) => {
  return (
    <StyledEvent>
      {event.bannerImg}
      <Typography variant="h5" className="eventTitle">
        {event.title}
      </Typography>
      <Typography className="eventDescription">{event.description}</Typography>
    </StyledEvent>
  );
};
