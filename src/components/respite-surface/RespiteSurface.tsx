import React, { useState } from "react";
import styled from "styled-components";

import respiteSurface from "../../assets/respite-holo-display-sharp.jpg";
import { RespiteSectors } from "./respite-sectors/RespiteSectors";

interface Props {}

export const RespiteSurface: React.FC<Props> = () => {
  return (
    <>
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
    </>
  );
};
