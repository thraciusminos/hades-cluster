import React from "react";
import { Button, styled, Typography } from "@mui/material";

const StyledEventButton = styled(Button)`
  padding: 2px;
  background-color: rgba(104, 161, 24, 93%);
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );

  &:hover {
    background-color: rgba(122, 235, 52, 93%);
  }
`;

export const EventLogButton: React.FC = () => {
  return (
    <StyledEventButton>
      <Typography
        sx={{
          padding: "12px 16px",
          color: "rgba(122, 235, 52, 93%)",
          backgroundColor: "#081406",
          fontSize: "18px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
      >
        Events
      </Typography>
    </StyledEventButton>
  );
};
