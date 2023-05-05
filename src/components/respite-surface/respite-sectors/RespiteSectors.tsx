import React from "react";
import styled from "styled-components";
// import AkkaShrineBorder from "../../../assets/respite-borders/akka-shrine";
import AsharWetlandsBorder from "../../../assets/respite-borders/ashar-wetlands";
// import ChilledGulfBorder from "../../../assets/respite-borders/chilled-gulf";
// import CrashSiteBorder from "../../../assets/respite-borders/crash-site";
// import GarroteBorder from "../../../assets/respite-borders/garrote";
import GhoulsheadBorder from "../../../assets/respite-borders/ghoulshead";
import HolySpringsBorder from "../../../assets/respite-borders/holy-springs";
import IcyWatersBorder from "../../../assets/respite-borders/icy-waters";
// import MosharradBorder from "../../../assets/respite-borders/mosharrad";
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

      {/* <MosharradBorder
        className="sectorBorder"
        style={{
          top: "42.6%",
          left: "75.7%",
          height: "24%",
          width: "12%",
        }}
      /> */}

      <IcyWatersBorder
        className="sectorBorder"
        style={{
          top: "0.3%",
          left: "85.2%",
          height: "30%",
          width: "15.2%",
        }}
      />
      <GhoulsheadBorder
        className="sectorBorder"
        style={{
          top: "24.6%",
          left: "83.8%",
          height: "22%",
          width: "16.5%",
        }}
      />
      {/* <GarroteBorder
        className="sectorBorder"
        style={{
          top: "42.7%",
          left: "83.75%",
          height: "23%",
          width: "14.0%",
        }}
      /> */}
      {/* <AkkaShrineBorder
        className="sectorBorder"
        style={{
          top: "58.0%",
          left: "78.0%",
          height: "30%",
          width: "12.5%",
        }}
      /> */}
      {/* <ChilledGulfBorder
        className="sectorBorder"
        style={{
          top: "44.6%",
          left: "89.2%",
          height: "35%",
          width: "11.0%",
        }}
      /> */}
      <AsharWetlandsBorder
        className="sectorBorder"
        style={{
          top: "64.6%",
          left: "89.2%",
          height: "29%",
          width: "11.0%",
        }}
      />
    </StyledSectorsContainer>
  );
};
