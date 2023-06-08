import { Grass } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

export const BloodstoneHuntEvent: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack pt={2} spacing={2} color={theme.palette.primary.main}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Bloodstone Hunt</Typography>
        <Box pr={3} display="flex" alignItems="center">
          <Grass color="error" />
          <Grass color="error" />
          <Grass color="error" />
        </Box>
      </Box>
      <Typography>
        Duration: Now, until August 31st or caches remain. (3 months)
      </Typography>
      <Typography>
        Gain control of zones in Davis Plantation that have Bloodstone icons to
        recover a cache.
      </Typography>
      <Box width="80%" alignSelf="center">
        <Grid container textAlign="center" rowGap={1}>
          <Grid item xs={6}>
            <Typography>Kill team games:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+/-1 control</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>40k 500pts games:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+/-2 control</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>40k 1000+pts games:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+/-3 control</Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography>
        Report games on WH40k channel with the prefix "hades:" with date,
        participants and the results.
      </Typography>
      <Typography py={1}>
        Rewards: Everyone with a cache receives a physical print of a Bloodstone
        cache!
      </Typography>
    </Stack>
  );
};

export default BloodstoneHuntEvent;
