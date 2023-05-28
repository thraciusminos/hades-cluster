import { Box, styled, Tooltip } from "@mui/material";
import { ControlZone } from "@resources/locationUtils";
import { factions } from "@resources/factions/factions";
import DavisDigsiteBorder from "@assets/sites/davis-plantation/digsite-border";
import DavisLoggingBorder from "@assets/sites/davis-plantation/logging-border";
import DavisProcessingBorder from "@app/assets/sites/davis-plantation/processing-border";
import DavisHabsNorthBorder from "@app/assets/sites/davis-plantation/habs-north-border";
import DavisHabsEastBorder from "@app/assets/sites/davis-plantation/habs-east-border";
import DavisAquacologyBorder from "@app/assets/sites/davis-plantation/aquacology-border";
import DavisEstateBorder from "@app/assets/sites/davis-plantation/estate-border";
import DavisCheckpointBorder from "@app/assets/sites/davis-plantation/checkpoint-border";

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

export const DavisZones: React.FC<Props> = ({ zones }) => {
  const loggingController = getControllingFaction(zones["davis.logging"]);
  const digsiteController = getControllingFaction(zones["davis.digsite"]);
  const processingController = getControllingFaction(zones["davis.processing"]);
  const habsNorthController = getControllingFaction(zones["davis.habs-north"]);
  const habsEastController = getControllingFaction(zones["davis.habs-east"]);
  const aquacologyController = getControllingFaction(zones["davis.aquacology"]);
  const estateController = getControllingFaction(zones["davis.estate"]);
  const checkpointController = getControllingFaction(zones["davis.checkpoint"]);

  return (
    <StyledSectorsContainer>
      <Tooltip title={"Logging"} placement="left-start" arrow open>
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
      </Tooltip>

      <Tooltip title={"Digsite"} placement="bottom-end" arrow open>
        <Box
          sx={{
            top: "9%",
            left: "77%",
            height: "17%",
            width: "15%",
          }}
          className="borderContainer"
        >
          <DavisDigsiteBorder
            className="zoneBorder"
            stroke={digsiteController?.color}
            fill={digsiteController?.bgColor}
          />
        </Box>
      </Tooltip>

      <Tooltip title={"Processing Plants"} placement="right-end" arrow open>
        <Box
          sx={{
            top: "28%",
            left: "55%",
            height: "16%",
            width: "11%",
          }}
          className="borderContainer"
        >
          <DavisProcessingBorder
            className="zoneBorder"
            stroke={processingController?.color}
            fill={processingController?.bgColor}
          />
        </Box>
      </Tooltip>

      <Tooltip title={"Northern Habs"} placement="top-start" arrow open>
        <Box
          sx={{
            top: "16.5%",
            left: "37%",
            height: "19%",
            width: "24%",
          }}
          className="borderContainer"
        >
          <DavisHabsNorthBorder
            className="zoneBorder"
            stroke={habsNorthController?.color}
            fill={habsNorthController?.bgColor}
          />
        </Box>
      </Tooltip>

      <Tooltip title={"Eastern Habs"} placement="bottom" arrow open>
        <Box
          sx={{
            top: "52.5%",
            left: "77%",
            height: "15%",
            width: "20%",
          }}
          className="borderContainer"
        >
          <DavisHabsEastBorder
            className="zoneBorder"
            stroke={habsEastController?.color}
            fill={habsEastController?.bgColor}
          />
        </Box>
      </Tooltip>

      <Tooltip title={"Aquacological Plant"} placement="top-end" arrow open>
        <Box
          sx={{
            top: "44%",
            left: "21%",
            height: "21%",
            width: "15%",
          }}
          className="borderContainer"
        >
          <DavisAquacologyBorder
            className="zoneBorder"
            stroke={aquacologyController?.color}
            fill={aquacologyController?.bgColor}
          />
        </Box>
      </Tooltip>

      <Tooltip title={"Davis Estate"} placement="bottom" arrow open>
        <Box
          sx={{
            top: "54%",
            left: "41%",
            height: "17%",
            width: "15%",
          }}
          className="borderContainer"
        >
          <DavisEstateBorder
            className="zoneBorder"
            stroke={estateController?.color}
            fill={estateController?.bgColor}
          />
        </Box>
      </Tooltip>

      <Tooltip title={"Dead Mans Ditch Checkpoint"} placement="left" arrow open>
        <Box
          sx={{
            top: "84%",
            left: "63%",
            height: "15%",
            width: "10%",
          }}
          className="borderContainer"
        >
          <DavisCheckpointBorder
            className="zoneBorder"
            stroke={checkpointController?.color}
            fill={checkpointController?.bgColor}
          />
        </Box>
      </Tooltip>
    </StyledSectorsContainer>
  );
};
