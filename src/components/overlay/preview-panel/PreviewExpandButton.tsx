import {
  Celestial,
  Sector,
  Site,
  Location,
  View,
} from "@app/resources/locationUtils";
import { Button } from "@mui/material";

interface Props {
  align: "left" | "right";
  expand: boolean;
  location: Celestial | Sector | Site | Location;
  setExpand: (newValue: boolean) => void;
  setActiveView: (view: View) => void;
  setActiveLocation: (location: Celestial | Sector | null) => void;
}

export const PreviewExpandButton: React.FC<Props> = ({
  align,
  expand,
  location,
  setExpand,
  setActiveView,
  setActiveLocation,
}) => {
  const handleViewChange = () => {
    setActiveView("respiteSurface");
    setActiveLocation(null);
    setExpand(false);
  };

  return (
    <>
      {location.name === "Kora's Respite" ? (
        <Button variant="contained" color="success" onClick={handleViewChange}>
          {">>>  GO TO SURFACE  <<<"}
        </Button>
      ) : expand ? (
        <Button
          variant="contained"
          color="success"
          onClick={() => setExpand(false)}
        >
          {align === "left" && "<<< "}
          {"CLOSE"}
          {align === "right" && " >>>"}
        </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => setExpand(true)}
        >
          {align === "right" && "<<< "}
          {"EXPAND"}
          {align === "left" && " >>>"}
        </Button>
      )}
    </>
  );
};
