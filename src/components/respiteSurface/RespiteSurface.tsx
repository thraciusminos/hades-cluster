import React from "react";
import styled from "styled-components";

import respite from "../../assets/respite-holo-display-sharp.jpg";
import location from "../../assets/icons/Maps-Define-Location-icon-green.png";

interface StyledProps {
  top: string;
  left: string;
}

const StyledLocContainer = styled.div<StyledProps>`
  position: absolute;
  z-index: 2;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;

  &:hover {
    width: 42px;
    height: 42px;
    animation: spin infinite 10s linear;
  }
`;

interface Props {}

export const RespiteSurface: React.FC<Props> = (props) => {
  const locations = {
    novaBolearisExpedition: {
      top: "12.00",
      left: "15.00",
      name: "Nova Borealis Expedition",
    },
    samaritanRefineris: {
      top: "27.00",
      left: "10.00",
      name: "Primaris Hive",
    },
    primarisHive: {
      top: "44.00",
      left: "45",
      name: "Primaris Hive",
    },
  };

  return (
    <div style={{ height: "90%", width: "94%" }}>
      <div style={{ position: "relative", height: "100%" }}>
        {Object.values(locations).map((value) => {
          return (
            <StyledLocContainer
              top={value.top}
              left={value.left}
            >
              <img
                src={location}
                alt={value.name || "location"}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </StyledLocContainer>
          );
        })}
      </div>
      <img
        src={respite}
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
    </div>
  );
};
