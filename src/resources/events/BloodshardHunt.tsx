import { Grass } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

export const BloodshardHuntEvent: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack pt={2} pl={2} spacing={2} color={theme.palette.primary.main}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ textDecoration: "underline" }}>
          Bloodshard Hunt
        </Typography>
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
        Gain control of zones in Davis Plantation that have Bloodshard icons to
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
            <Typography>40k 500-1000 pts games:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+/-2 control</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>40k 1000+ pts games:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+/-3 control</Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography>
        Report games on WH40k channel titled "Hades" with date, participants and
        the results.
      </Typography>
      <Typography py={1}>
        Rewards: Everyone with a cache receives a physical print of a Bloodshard
        cache!
      </Typography>
      <Stack py={1}>
        <Typography sx={{ textDecoration: "underline" }}>
          Caches discovered
        </Typography>
        <Box display="flex" flexDirection="row" pl={2} pt={1}>
          <Typography>Templars Detachment: </Typography>
          <Grass sx={{ paddingLeft: "12px" }} color="error" />
          <Grass sx={{ paddingLeft: "12px" }} color="error" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default BloodshardHuntEvent;
