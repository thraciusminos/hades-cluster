import React from "react";
import styled from "styled-components";
import ProspectCoastBorder from "../../assets/respite-borders/prospect-shore";
import SamaritanBorder from "../../assets/respite-borders/samaritan";
import ShaleBasinBorder from "../../assets/respite-borders/shale-basin";

const StyledSectorsContainer = styled.div`
  position: absolute;
  height: inherit;
  width: inherit;
  z-index: 3;

  .sectorBorder {
    position: relative;
    height: 20%%;
  }
`;

interface Props {}

export const SectorsLayer: React.FC<Props> = (props) => {
  return (
    <StyledSectorsContainer>
      <ProspectCoastBorder />
      <ShaleBasinBorder />
      <SamaritanBorder />
    </StyledSectorsContainer>
  );
};
