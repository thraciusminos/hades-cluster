import { Box, Stack, Typography } from "@mui/material";
import { Construction, Grass, Search, WarningAmber } from "@mui/icons-material";
import { theme } from "@app/theme/theme";
import { Image } from "@app/components/common/Image";
import { factions } from "@resources/factions/factions";
import { MapMarker } from "@app/components/common/MapMarker";
import {
  Celestial,
  ControlZone,
  Sector,
  Site,
} from "@app/resources/locationUtils";
import { EventIconsRow } from "@app/components/common/EventIconsRow";
import { ExpandFactionsPanel } from "../ExpandFactionsPanel";
import { getExpandImages } from "../ExpandUtils";
import { DavisZones } from "./DavisZones";
import { WalkertownZones } from "./WalkertownZones";

export const EventIconDepleted = (
  <Box borderRadius={"50%"} bgcolor={theme.palette.error.main}>
    <Search
      htmlColor={theme.palette.grey[900]}
      fontSize="small"
      sx={{ verticalAlign: "middle" }}
    />
  </Box>
);

export const EventIcon = (
  <Box borderRadius={"50%"} bgcolor={"GrayText"}>
    <Search
      htmlColor={theme.palette.grey[900]}
      fontSize="small"
      sx={{ verticalAlign: "middle" }}
    />
  </Box>
);

export const EventIconSuccessful = (
  <Box borderRadius={"50%"} bgcolor={theme.palette.success.light}>
    <Search
      htmlColor={theme.palette.grey[900]}
      fontSize="small"
      sx={{ verticalAlign: "middle" }}
    />
  </Box>
);

interface Props {
  sites: Site[];
  controlZones: { [x: string]: ControlZone } | undefined;
  activeSite: Site | null;
  activeLocation: Celestial | Sector;
  setActiveSite: (site: Site | null) => void;
}

export const GhoulsheadExpand: React.FC<Props> = ({
  sites,
  controlZones,
  activeSite,
  activeLocation,
  setActiveSite,
}) => {
  const expandImages = getExpandImages(activeLocation);
  const siteFactions = activeSite?.factions.map(
    (factionId) => factions[factionId]
  );

  const siteZones: Record<string, ControlZone> = {};
  if (controlZones) {
    activeSite?.controlZones?.forEach(
      (zoneId) => (siteZones[zoneId] = controlZones[zoneId])
    );
  }

  const items = Object.values(siteZones).reduce(
    (acc, curr) => {
      acc.depleted = acc.depleted + (curr.depletedItems || 0);
      acc.open = acc.open + (curr.eventItems || 0);
      acc.successful = acc.successful + (curr.successfulItems || 0);
      return acc;
    },
    { depleted: 0, open: 0, successful: 0 }
  );

  return (
    <Box>
      <Box className="bannersContainer">
        <>
          {activeSite?.name === "Walkertown" ? (
            <>
              {expandImages?.banners[0]}
              <Box
                sx={{
                  width: "65.5%",
                  padding: `${theme.spacing(2.7)} 0`,
                  borderRadius: theme.spacing(0.5),
                  backgroundColor: theme.palette.grey[900],
                  color: theme.palette.primary.dark,
                }}
              >
                <Stack display="flex" alignItems="center" rowGap={2.3}>
                  <Typography
                    fontWeight="bold"
                    color={theme.palette.primary.main}
                  >
                    Investigation Progress
                  </Typography>
                  <Stack rowGap={1.3}>
                    <EventIconsRow
                      depletedItems={items.depleted}
                      openItems={items.open}
                      successsfulItems={items.successful}
                      eventIconDepleted={EventIconDepleted}
                      eventIcon={EventIcon}
                      eventIconSuccessful={EventIconSuccessful}
                      boxProps={{ gap: 0.6 }}
                    />

                    <Box display="flex" justifyContent="space-between">
                      <Typography color={theme.palette.error.light}>
                        Conspirators
                      </Typography>
                      <Typography>Investigators</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </>
          ) : (
            expandImages?.banners
          )}
        </>
      </Box>

      <Box className="expandBody">
        {activeSite ? (
          <>
            {activeSite.name === "Davis Plantation" && (
              <Box className="siteContent">
                <Box className="siteBgContainer">
                  <DavisZones zones={siteZones} />
                  <Image src="davisSite" className="mapImage" />
                </Box>
                <ExpandFactionsPanel factions={siteFactions} />
              </Box>
            )}
            {activeSite.name === "Walkertown" && (
              <Box className="siteContent">
                <Box className="siteBgContainer">
                  <WalkertownZones zones={siteZones} />
                  <Image src="walkertownSite" className="mapImage" />
                </Box>
                <ExpandFactionsPanel factions={siteFactions} />
              </Box>
            )}
            {activeSite.name === "St. Charles Parish" && (
              <Box
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                fontSize="36px"
              >
                <Construction
                  sx={{ fontSize: "96px", paddingBottom: "16px" }}
                />
                Under construction!
              </Box>
            )}
          </>
        ) : (
          <Box className="expandContent">
            {expandImages.map}
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: "57%",
                fontSize: "2rem",
                zIndex: 4,
              }}
            >
              <WarningAmber
                sx={{
                  color: theme.palette.error.main,
                  backgroundColor: "black",
                  clipPath: "polygon(50% 0%, 0 91%, 100% 91%);",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "45%",
                left: "79%",
                fontSize: "2rem",
                zIndex: 4,
              }}
            >
              <WarningAmber
                sx={{
                  color: "rgba(255, 197, 10, 100%)",
                  backgroundColor: "black",
                  clipPath: "polygon(50% 0%, 0 91%, 100% 91%);",
                }}
              />
              <Grass color="error" />
            </Box>
            {sites &&
              sites?.map((site) => {
                return (
                  <MapMarker
                    key={site.name}
                    location={site}
                    onClick={() => setActiveSite(site)}
                  />
                );
              })}
          </Box>
        )}
      </Box>
    </Box>
  );
};
