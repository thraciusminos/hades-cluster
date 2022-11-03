import React from "react";
import overlay from '../../assets/overlay.svg'

export const Overlay: React.FC = () => {
  return (
    <img
      src={overlay}
      alt="overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
      height='100%'
      width='100%'
    />
  );
};
