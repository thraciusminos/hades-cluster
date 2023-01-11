import { Grid } from "@mui/material";
import React from "react";
import { LocationMarker } from "./LocationMarker";
import { Location } from "./SurfaceUtils";

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
    <Grid container xs={12}>
      {locations &&
        locations.map((location) => {
          return (
            <Grid item xs={4}>
              <LocationMarker
                location={location}
                isSelected={location.name === selectedLocation.name}
                setSelectedLoc={setSelectedLoc}
                style={{ position: "static" }}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
