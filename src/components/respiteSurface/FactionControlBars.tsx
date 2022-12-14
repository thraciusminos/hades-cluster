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
        <Grid item xs={4}>
          <Typography className="locationDescription">{label}</Typography>
        </Grid>
        <Grid item xs={7} className="progressBarContainer">
          <LinearProgress
            variant="determinate"
            value={progress}
            className="progressBar"
            color="inherit"
          />
        </Grid>
        <Grid item xs={1} className="progressBarContainer">
          <Typography className="locationDescription">{progress}</Typography>
        </Grid>
      </StyledControlBar>
    );
  };

  const getControlBars = () => {
    const bars = [];
    for (var faction of factions) {
      bars.push(<ControlBar label={faction.name} progress={faction.control} />);
    }
    return bars;
  };

  return <Stack>{getControlBars()}</Stack>;
};
