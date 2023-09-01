import { Box, styled } from "@mui/material";
import { ControlZone } from "@resources/locationUtils";
import { ZoneTooltip } from "@app/components/common/ZoneTooltip";
import { MapMarker } from "@app/components/common/MapMarker";
import {
  EventIcon,
  EventIconDepleted,
  EventIconSuccessful,
} from "./GhoulsheadExpand";

const StyledSectorsContainer = styled(Box)`
  .borderContainer {
    position: absolute;
  }
`;

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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
        placement="left"
      >
        <Box
          sx={{
            top: "8%",
            left: "20%",
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
        eventIcon={EventIcon}
        eventIconDepleted={EventIconDepleted}
        eventIconSuccessful={EventIconSuccessful}
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
