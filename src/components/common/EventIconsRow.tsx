import { Grass } from "@mui/icons-material";
import { Box } from "@mui/material";

interface Props {
  eventItems: number;
}

export const EventIconsRow: React.FC<Props> = ({ eventItems }) => {
  return (
    <Box display="flex" justifyContent="center">
      {eventItems >= 1 && <Grass color="error" fontSize="small" />}
      {eventItems >= 2 && <Grass color="error" fontSize="small" />}
      {eventItems === 3 && <Grass color="error" fontSize="small" />}
    </Box>
  );
};
