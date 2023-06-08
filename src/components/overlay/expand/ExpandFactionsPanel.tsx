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
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              color={faction.color}
              gap={1}
            >
              {getFactionIcon(faction.icon)}
              <Stack>
                <Typography fontWeight="bold">{faction.name}</Typography>
                <Typography
                  variant="subtitle2"
                  color={theme.palette.primary.dark}
                >
                  {faction.short}
                </Typography>
              </Stack>
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
