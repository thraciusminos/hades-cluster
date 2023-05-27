import { Grid, styled, Typography } from "@mui/material";
import { Site } from "@resources/locationUtils";
import { LocationIcon } from "../../common/LocationIcon";

const StyledGrid = styled(Grid)`
  .locationColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

interface Props {
  sites: Site[];
  activeSite: Site | null;
  setActiveSite: (target: Site | null) => void;
}

export const PreviewPanelSites: React.FC<Props> = ({
  sites,
  activeSite,
  setActiveSite,
}) => {
  const getColumnWidth = () => Math.floor(12 / sites.length);

  return (
    <StyledGrid container>
      {sites &&
        sites.map((site) => {
          return (
            <Grid
              key={site.name}
              item
              xs={getColumnWidth()}
              className="locationColumn"
            >
              <LocationIcon
                location={site}
                isSelected={site.name === activeSite?.name}
                setSelectedLoc={setActiveSite}
              />
              <Typography
                className="locationDescription"
                fontWeight="bold"
                textAlign="center"
              >
                {site.name}
              </Typography>
              <Typography className="locationDescription" textAlign="center">
                {site.controllingFaction || "Contested"}
              </Typography>
            </Grid>
          );
        })}
    </StyledGrid>
  );
};
