import React from "react";
import { Typography } from "@mui/material";
import { RightMenu } from "./overlay-components/RightMenu";
import { ScenarioEvent } from "../../resources/eventUtils";
import { Views } from "../hades-cluster/HadesClusterViewer";

const getActiveViewTitle = (activeView: Views) => {
  if (activeView === "respiteSystem") {
    return "Kora's Respite System";
  }
  if (activeView === "respiteSurface") {
    return "Respite Surface Command";
  }
};

interface Props {
  events: ScenarioEvent[];
  activeView: Views;
  setActiveView: (view: Views) => void;
}

export const Overlay: React.FC<Props> = ({
  events,
  activeView,
  setActiveView,
}) => {
  return (
    <>
      <Typography
        sx={{
          position: "absolute",
          top: "3%",
          left: "2%",
          padding: "12px 64px 18px 18px",
          color: "rgba(122, 235, 52, 93%)",
          backgroundColor: "#081406",
          fontSize: "28px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 90% 100%, 0 100%)",
          zIndex: 10,
        }}
      >
        {getActiveViewTitle(activeView)}
      </Typography>
      <RightMenu events={events} />
    </>
  );
};
