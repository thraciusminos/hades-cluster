import React from "react";
import styled from "styled-components";
import CrashSiteBorder from "../../../assets/respite-borders/crash-site";
import HolySpringsBorder from "../../../assets/respite-borders/holy-springs";
import NovaBolearisBorder from "../../../assets/respite-borders/nova-bolearis";
import ProspectCoastBorder from "../../../assets/respite-borders/prospect-shore";
import SamaritanBorder from "../../../assets/respite-borders/samaritan";
import ShaleBasinBorder from "../../../assets/respite-borders/shale-basin";

const StyledSectorsContainer = styled.div`
  position: absolute;
  top: 5%;
  height: inherit;
  width: inherit;
  z-index: 2;

  .sectorBorder {
    position: absolute;
  }
`;

interface Props {}

export const RespiteSectors: React.FC<Props> = (props) => {
  return (
    <StyledSectorsContainer>
      <HolySpringsBorder
        className="sectorBorder"
        style={{
          marginLeft: "-0.2%",
          top: "2.2%",
          left: "0%",
          height: "22%",
          width: "11.1%",
        }}
      />
      <ProspectCoastBorder
        className="sectorBorder"
        style={{
          marginLeft: "-0.3%",
          top: "22%",
          left: "0%",
          height: "40%",
          width: "12%",
        }}
      />
      <NovaBolearisBorder
        className="sectorBorder"
        style={{
          top: "3.6%",
          left: "6.3%",
          height: "29.5%",
          width: "17.8%",
        }}
      />
      <ShaleBasinBorder
        className="sectorBorder"
        style={{
          top: "17%",
          left: "4.5%",
          height: "24%",
          width: "12%",
        }}
      />
      <SamaritanBorder
        className="sectorBorder"
        style={{
          top: "27.8%",
          left: "7.1%",
          height: "34%",
          width: "13.9%",
        }}
      />
    </StyledSectorsContainer>
  );
};
