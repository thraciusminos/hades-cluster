import { Box, styled } from "@mui/material";
import { ControlZone } from "@resources/locationUtils";
import { factions } from "@resources/factions/factions";
import { ZoneTooltip } from "@app/components/common/ZoneTooltip";
import DavisLoggingBorder from "@assets/sites/davis-plantation/logging-border";

const StyledSectorsContainer = styled(Box)`
  .borderContainer {
    position: absolute;
  }

  .sectorBorder {
    position: absolute;
  }

  .zoneBorder {
    height: 100%;
    width: 100%;
  }
`;

const getControllingFaction = (zone: ControlZone) => {
  const controllerId = zone.factions.find(
    (faction) => faction.control === 3
  )?.name;
  return controllerId ? factions[controllerId] : undefined;
};

interface Props {
  zones: Record<string, ControlZone>;
}

export const IncursionSiteAlpha: React.FC<Props> = ({ zones }) => {
  const loggingController = getControllingFaction(zones["davis.logging"]);

  return (
    <StyledSectorsContainer>
      <ZoneTooltip zone={zones["davis.logging"]} placement="left-start">
        <Box
          sx={{
            top: "0.2%",
            left: "86%",
            height: "15%",
            width: "11%",
          }}
          className="borderContainer"
        >
          <DavisLoggingBorder
            className="zoneBorder"
            stroke={loggingController?.color}
            fill={loggingController?.bgColor}
          />
        </Box>
      </ZoneTooltip>
    </StyledSectorsContainer>
  );
};
