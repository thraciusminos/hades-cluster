import { styled, Paper, Typography, Box, Button } from "@mui/material";
import { ScenarioEvent } from "@resources/eventUtils";
import { View, Celestial, Sector } from "@resources/locationUtils";
import { respiteSectors } from "@resources/control-initial/respiteSectors";
import { Menus } from "./RightMenu";

const StyledEvent = styled(Paper)`
  margin: 24px 0;
  width: 48vw;
  padding: 24px 16px;
  background-color: #081406;
  border: 1px solid rgba(122, 235, 52, 93%);
  border-radius: 8px;

  .eventTitle {
    color: rgba(122, 235, 52, 93%);
    padding-bottom: 16px;
  }

  .eventDescription {
    color: rgba(122, 235, 52, 93%);
    padding-bottom: 12px;
  }
`;

const getReadableTitle = (title?: string) => {
  switch (title) {
    case "respiteSurface":
      return "Kora's Respite";
    case "ghoulshead":
      return "Ghoulshead";
    default:
      return "";
  }
};

interface Props {
  event: ScenarioEvent;
  setOpen: (value: Menus) => void;
  setActiveView: (view: View, location?: Celestial | Sector | null) => void;
}

export const ScenarioEventCard: React.FC<Props> = ({
  event,
  setOpen,
  setActiveView,
}) => {
  const handleOpenEventLocationClick = () => {
    if (event.view && event.location) {
      setActiveView(event.view, respiteSectors[event.location]);
      setOpen(null);
    }
  };

  return (
    <StyledEvent>
      <Box display="flex" flexDirection="row">
        {event.bannerImg}
        <Box px="16px">
          <Typography variant="h5" className="eventTitle">
            {event.title}
          </Typography>

          <Typography className="eventDescription">
            {getReadableTitle(event.view)} {" - "}
            {getReadableTitle(event.location)}
          </Typography>
          <Typography className="eventDescription">
            {event.description}
          </Typography>
          <Typography className="eventDescription">
            {event.description2}
          </Typography>

          {event.view && event.location && (
            <Box py="24px">
              <Button
                variant="contained"
                color="success"
                sx={{ alignSelf: "center" }}
                onClick={() => handleOpenEventLocationClick()}
              >
                Go to View
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </StyledEvent>
  );
};
