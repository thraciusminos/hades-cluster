import { styled, Typography, Box, Button, Stack } from "@mui/material";
import { ScenarioEvent } from "@resources/eventUtils";
import { View, Celestial, Sector } from "@resources/locationUtils";
import { respiteSectors } from "@resources/control-initial/respiteSectors";
import { Menus } from "./RightMenu";
import { celestialLocations } from "@app/resources/control-initial/celestialLocations";

const StyledEvent = styled(Box)`
  margin: 24px 0;
  width: 48vw;
  padding: 24px 16px;
  color: rgba(122, 235, 52, 93%);
  background-color: #081406;
  border: 1px solid rgba(122, 235, 52, 93%);
  border-radius: 8px;
`;

const getReadableTitle = (title?: string) => {
  switch (title) {
    case "minosSystem":
      return "Minos";
    case "gallowsEnd":
      return "Gallows End";
    case "korasRespite":
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
  activeView: View;
  setOpen: (value: Menus) => void;
  setActiveView: (view: View) => void;
  setActiveLocation: (location: Celestial | Sector | null) => void;
}

export const ScenarioEventCard: React.FC<Props> = ({
  event,
  activeView,
  setOpen,
  setActiveView,
  setActiveLocation,
}) => {
  const handleOpenEventLocationClick = () => {
    if (event.view && event.view !== activeView) {
      setActiveView(event.view);
    }
    if (event.view === "minosSystem" && event.location) {
      setActiveLocation(celestialLocations[event.location]);
    }
    if (event.view === "respiteSurface" && event.location) {
      setActiveLocation(respiteSectors[event.location]);
    }
    setOpen(null);
  };

  return (
    <StyledEvent>
      <Stack px={2} spacing={1}>
        <Box width="100%">{event.bannerImg}</Box>
        <Typography variant="h5">{event.title}</Typography>
        <Typography>{event.date.toISOString().slice(0, 10)}</Typography>

        <Typography>
          {getReadableTitle(event.view)} {event.view && event.location && " - "}
          {getReadableTitle(event.location)}
        </Typography>
        <Typography>{event.description}</Typography>
        {event.description2 && <Typography>{event.description2}</Typography>}

        {event.location && (
          <Box py={1}>
            <Button
              id="event-location-button"
              variant="contained"
              color="success"
              onClick={() => handleOpenEventLocationClick()}
            >
              Go to Location
            </Button>
          </Box>
        )}
      </Stack>
    </StyledEvent>
  );
};
