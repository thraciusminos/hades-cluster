import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { LocationIcon } from "./LocationIcon";
import { Location } from "./SurfaceUtils";

const StyledGrid = styled(Grid)`
  .locationColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

interface Props {
  locations: Location[];
  selectedLocation: Location;
  setSelectedLoc: (location: Location | null) => void;
}

export const SectorPanelLocations: React.FC<Props> = ({
  locations,
  selectedLocation,
  setSelectedLoc,
}) => {
  return (
    <StyledGrid container xs={12}>
      {locations &&
        locations.map((location) => {
          return (
            <Grid item xs={4} className="locationColumn">
              <LocationIcon
                location={location}
                isSelected={location.name === selectedLocation.name}
                setSelectedLoc={setSelectedLoc}
              />
              <Typography
                className="locationDescription"
                fontWeight="bold"
                style={{ paddingBottom: "0px" }}
              >
                {location.name}
              </Typography>
              <Typography
                className="locationDescription"
                style={{ paddingTop: "0px" }}
              >
                {location.factions[0].name}
              </Typography>
            </Grid>
          );
        })}
    </StyledGrid>
  );
};
