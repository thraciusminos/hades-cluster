import { Box, styled } from "@mui/material";
import { ControlZone } from "@resources/locationUtils";
import { factions } from "@resources/factions/factions";
import DavisDigsiteBorder from "@assets/sites/davis-plantation/digsite-border";
import DavisLoggingBorder from "@assets/sites/davis-plantation/logging-border";

const StyledSectorsContainer = styled(Box)`
  .sectorBorder {
    position: absolute;
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

export const DavisZones: React.FC<Props> = ({ zones }) => {
  const loggingController = getControllingFaction(zones["davis.logging"]);
  const digsiteController = getControllingFaction(zones["davis.digsite"]);

  return (
    <StyledSectorsContainer>
      <DavisLoggingBorder
        className="sectorBorder"
        style={{
          top: "0.2%",
          left: "86%",
          height: "15%",
          width: "11%",
        }}
        stroke={loggingController?.color}
        fill={loggingController?.bgColor}
      />
      <DavisDigsiteBorder
        className="sectorBorder"
        style={{
          top: "10%",
          left: "77%",
          height: "17%",
          width: "15%",
        }}
        stroke={digsiteController?.color}
        fill={digsiteController?.bgColor}
      />
    </StyledSectorsContainer>
  );
};
