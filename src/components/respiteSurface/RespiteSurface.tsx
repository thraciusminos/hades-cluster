import React from "react";
import respite from "../../assets/respite-holo-display-sharp.jpg";

interface Props {}

export const RespiteSurface: React.FC<Props> = (props) => {
  const locations = {
    primarisHive: {
      top: "370",
      left: "660",
      name: "Primaris Hive",
    },
  };

  return (
    <div style={{ height: "90%", width: "94%" }}>
      <div style={{ position: "relative" }}>
        {Object.values(locations).map((value) => {
          return (
            <button
              style={{
                position: "absolute",
                top: value.top + "px",
                left: value.left + "px",
              }}
            >
              <img src="" alt={value.name || "location"} />
            </button>
          );
        })}
      </div>
      <img src={respite} alt="respite" height="100%" width="100%" />
    </div>
  );
};
