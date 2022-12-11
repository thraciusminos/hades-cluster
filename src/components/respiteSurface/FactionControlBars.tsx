import React from "react";
import styled from "styled-components";
import { Grid, LinearProgress, Stack, Typography } from "@mui/material";

const StyledControlBar = styled(Grid)`
  .progressBarContainer {
    display: flex;
    align-items: center;
  }

  .progressBar {
    width: 100%;
    color: rgba(110, 201, 18, 93%);
  }
`;

interface Props {
  factions: { name: string; control: number }[];
}

export const FactionControlBars: React.FC<Props> = ({ factions }) => {

  const ControlBar: React.FC<{ label: string; progress: number }> = ({
    label,
    progress,
  }) => {
    return (
      <StyledControlBar container>
        <Grid item xs={3}>
          <Typography className="locationDescription">{label}</Typography>
        </Grid>
        <Grid item xs={9} className="progressBarContainer">
          <LinearProgress
            variant="determinate"
            value={progress}
            className="progressBar"
            color="inherit"
          />
        </Grid>
      </StyledControlBar>
    );
  };

  return (<ControlBar label={factions[0].name} progress={factions[0].control} />);
  // <Stack>
  //   {factions.forEach((faction) => {return (<Typography>
  //               {faction.name}
  //             </Typography>)})}
  //     {factions.forEach((faction) => {
  //       return (
  //         <StyledControlBar container>
  //           <Grid item xs={3}>
  //             <Typography className="locationDescription">
  //               {faction.name}
  //             </Typography>
  //           </Grid>
  //           <Grid item xs={9} className="progressBarContainer">
  //             <LinearProgress
  //               variant="determinate"
  //               value={faction.control}
  //               className="progressBar"
  //               color="inherit"
  //             />
  //           </Grid>
  //         </StyledControlBar>
  //       );
  //     })}
  // </Stack>
};
