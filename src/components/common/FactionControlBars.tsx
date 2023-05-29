import { Box, Stack, Typography, styled } from "@mui/material";
import { getFactionIcon } from "@app/resources/factionUtils";
import { factions as allFactions } from "@resources/factions/factions";

const StyledStack = styled(Stack)`
  .progressBarContainer {
    display: flex;
    align-items: center;
  }

  .progressBar {
    width: 16px;
    height: 5px;
    margin: 0 2px;
    background-color: rgba(110, 201, 18, 93%);
  }
`;

interface Props {
  factions: { name: string; control: number }[];
}

export const FactionControlBars: React.FC<Props> = ({ factions }) => {
  return (
    <StyledStack>
      {factions ? (
        factions.map((faction) => {
          const factionObj = allFactions[faction.name];
          return (
            <Box className="progressBarContainer" key={`${faction.name}-bars`}>
              <Box>
                {getFactionIcon(factionObj.icon, {
                  color: factionObj.color,
                  height: "16px",
                })}
              </Box>
              <Box className="progressBarContainer">
                {faction.control > 0 && (
                  <div className="progressBar" key={`${faction.name}-bar-1`} />
                )}
                {faction.control > 1 && (
                  <div className="progressBar" key={`${faction.name}-bar-2`} />
                )}
                {faction.control > 2 && (
                  <div className="progressBar" key={`${faction.name}-bar-3`} />
                )}
              </Box>
            </Box>
          );
        })
      ) : (
        <Typography>Neutral</Typography>
      )}
    </StyledStack>
  );
};
