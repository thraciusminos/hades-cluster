import { Box, styled } from "@mui/material";
import { ControlZone } from "@resources/locationUtils";
// import { factions } from "@resources/factions/factions";
import { ZoneTooltip } from "@app/components/common/ZoneTooltip";
import { MapMarker } from "@app/components/common/MapMarker";
import { Search } from "@mui/icons-material";
import { theme } from "@app/theme/theme";

const StyledSectorsContainer = styled(Box)`
  .borderContainer {
    position: absolute;
  }
`;

const eventIcon = (
  <Box borderRadius={"50%"} bgcolor={"GrayText"}>
    <Search
      htmlColor={theme.palette.grey[900]}
      fontSize="small"
      sx={{ verticalAlign: "middle" }}
    />
  </Box>
);

interface Props {
  zones: Record<string, ControlZone>;
}

export const WalkertownZones: React.FC<Props> = ({ zones }) => {
  if (!zones) {
    return <></>;
  }

  return (
    <StyledSectorsContainer>
      <ZoneTooltip
        zone={zones["walkertown.chemical"]}
        eventIcon={eventIcon}
        placement="top-end"
      >
        <Box
          sx={{
            top: "7%",
            left: "24%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.refinery"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.refinery"]}
        eventIcon={eventIcon}
        placement="top-start"
      >
        <Box
          sx={{
            top: "11%",
            left: "67%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.refinery"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.docks"]}
        eventIcon={eventIcon}
        placement="top-start"
      >
        <Box
          sx={{
            top: "24%",
            left: "86%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.refinery"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.chapel"]}
        eventIcon={eventIcon}
        placement="top-end"
      >
        <Box
          sx={{
            top: "50%",
            left: "8%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.chapel"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.wulang"]}
        eventIcon={eventIcon}
        placement="top-end"
      >
        <Box
          sx={{
            top: "40%",
            left: "46%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.wulang"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.cargoport"]}
        eventIcon={eventIcon}
        placement="top-start"
      >
        <Box
          sx={{
            top: "50.4%",
            left: "80%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.cargoport"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.transport"]}
        eventIcon={eventIcon}
        placement="bottom-start"
      >
        <Box
          sx={{
            top: "62%",
            left: "80%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.transport"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.comms"]}
        eventIcon={eventIcon}
        placement="bottom-end"
      >
        <Box
          sx={{
            top: "85%",
            left: "14.5%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.comms"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.mines"]}
        eventIcon={eventIcon}
        placement="bottom-end"
      >
        <Box
          sx={{
            top: "88%",
            left: "42%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.mines"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>

      <ZoneTooltip
        zone={zones["walkertown.processing"]}
        eventIcon={eventIcon}
        placement="bottom-start"
      >
        <Box
          sx={{
            top: "90%",
            left: "75.5%",
          }}
          className="borderContainer"
        >
          <MapMarker
            location={zones["walkertown.processing"]}
            isSelected={false}
            onClick={() => {}}
          />
        </Box>
      </ZoneTooltip>
    </StyledSectorsContainer>
  );
};
