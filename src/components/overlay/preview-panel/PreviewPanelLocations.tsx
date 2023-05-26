import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { LocationIcon } from "../../common/LocationIcon";
import { Sector, Site } from "@resources/locationUtils";

const StyledGrid = styled(Grid)`
  .locationColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

interface Props {
  activeSite: Sector | Site | null;
  activeLocation: Sector;
  setActiveSite: (target: Sector | Site | null) => void;
}

export const PreviewPanelLocations: React.FC<Props> = ({
  activeSite,
  activeLocation,
  setActiveSite,
}) => {
  const locations = activeLocation.sites || [];
  const getColumnWidth = () => Math.floor(12 / locations.length);

  return (
    <StyledGrid container>
      {locations &&
        locations.map((location) => {
          return (
            <Grid
              key={location.name}
              item
              xs={getColumnWidth()}
              className="locationColumn"
            >
              <LocationIcon
                location={location}
                isSelected={location.name === activeSite?.name}
                setSelectedLoc={setActiveSite}
              />
              <Typography
                className="locationDescription"
                fontWeight="bold"
                textAlign="center"
              >
                {location.name}
              </Typography>
              <Typography className="locationDescription" textAlign="center">
                {location.factions[0].name}
              </Typography>
            </Grid>
          );
        })}
    </StyledGrid>
  );
};
