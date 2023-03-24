import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { LocationIcon } from "./LocationIcon";
import { Location } from "../../resources/locationUtils";

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
                isSelected={location.name === selectedLocation.name}
                setSelectedLoc={setSelectedLoc}
              />
              <Typography
                className="locationDescription"
                fontWeight="bold"
                style={{ paddingBottom: "0px", textAlign: "center" }}
              >
                {location.name}
              </Typography>
              <Typography
                className="locationDescription"
                style={{ paddingTop: "0px", textAlign: "center" }}
              >
                {location.factions[0].name}
              </Typography>
            </Grid>
          );
        })}
    </StyledGrid>
  );
};
