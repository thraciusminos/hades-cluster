import React, { useState } from "react";
import styled from "styled-components";

import respiteSurface from "../../assets/respite-holo-display-sharp.jpg";
import { Location } from "../../resources/locationUtils";
import { LocationMarker } from "../common/LocationMarker";
import { PreviewPanel } from "../overlay/preview-panel/PreviewPanel";
import { ClickAwayListener } from "@mui/material";
import { RespiteSectors } from "./respite-sectors/RespiteSectors";

const StyledSurfaceContainer = styled.div`
  height: 90%;
  width: 94%;

  .locationLayer {
    position: relative;
    height: 100%;
  }
`;

interface Props {}

export const RespiteSurface: React.FC<Props> = () => {
  return (
    <StyledSurfaceContainer>
      <RespiteSectors />
      <img
        src={respiteSurface}
        alt="respite"
        height="100%"
        width="100%"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "inherit",
          width: "inherit",
        }}
      />
    </StyledSurfaceContainer>
  );
};
