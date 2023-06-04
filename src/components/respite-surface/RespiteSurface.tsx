import { WarningAmber } from "@mui/icons-material";
import respiteSurface from "@assets/respite-holo-display-sharp.jpg";
import { RespiteSectors } from "./respite-sectors/RespiteSectors";

interface Props {}

export const RespiteSurface: React.FC<Props> = () => {
  return (
    <>
      <RespiteSectors />
      <WarningAmber
        sx={{
          position: "absolute",
          top: "32%",
          left: "89%",
          fontSize: "2rem",
          color: "rgba(255, 197, 10, 100%)",
          backgroundColor: "black",
          clipPath: "polygon(50% 0%, 0 91%, 100% 91%);",
          zIndex: 4,
        }}
      />
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
