import { Faction, getFactionIcon } from "@app/resources/factionUtils";
import { Box, Stack, Typography, useTheme } from "@mui/material";

interface Props {
  factions: Faction[] | undefined;
}

export const ExpandFactionsPanel: React.FC<Props> = ({ factions }) => {
  const theme = useTheme();

  return (
    <Stack spacing={2} className="siteDescription">
      <Typography fontWeight="bold" color={theme.palette.primary.main}>
        Factions
      </Typography>
      {factions ? (
        Object.values(factions).map((faction) => (
          <Stack key={faction.name} spacing={1}>
            <Box display="flex" flexDirection="row" color={faction.color}>
              {getFactionIcon(faction.icon)}
              <Typography fontWeight="bold">{faction.name}</Typography>
            </Box>
            <Typography>{faction.description}</Typography>
          </Stack>
        ))
      ) : (
        <Typography>No Factions found.</Typography>
      )}
    </Stack>
  );
};
