import { EventIcon } from "@app/components/overlay/expand/ghoulshead/GhoulsheadExpand";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";

export const WalkertownTroublesEvent: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack pt={2} pl={2} spacing={2} color={theme.palette.primary.main}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ textDecoration: "underline" }}>
          Walkertown Troubles
        </Typography>
        <Box pr={3} display="flex" alignItems="center" gap={0.5}>
          {EventIcon}
          {EventIcon}
          {EventIcon}
        </Box>
      </Box>
      <Typography>Duration: September 1 to December 31st. (3 months)</Typography>
      <Typography>
        Clashes between Walkertown's disparate factions are at boiling point.
        What led these normally functioning, if tense, relations to the brink of
        an all out war?
      </Typography>
      <Typography>Play as either of the two coalitions:</Typography>
      <Typography>
        As a CONSPIRATOR, work to undermine order and cover any traces of your
        actions.
      </Typography>
      <Typography>
        As an INVESTIGATOR, find clues to unravel the conspiracy and find out
        what was really happening in the shadows.
      </Typography>
      <Box width="80%" alignSelf="center" paddingY={2}>
        <Grid container textAlign="center" rowGap={1}>
          <Grid item xs={6}>
            <Typography>Kill team & 40k 500-750 pts</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+1 control</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>40k 1000-1500 pts:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+2 control</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>40k 1750-2000 pts:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>+3 control</Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography>
        Gaining control of an Incident Site either reveals or destroys a clue.
      </Typography>
      <Typography>
        Work together to achieve your coalition's agenda, for all participants of
        a Site capture are rewarded with a stash of Radium Diamonds at the end
        of the season!
      </Typography>
      <Typography>
        Report games on WH40k channel titled "Hades" with date, participants and
        the results.
      </Typography>
      <Stack py={1}></Stack>
    </Stack>
  );
};
