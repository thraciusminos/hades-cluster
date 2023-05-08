import React from "react";
import { Button, styled, Typography } from "@mui/material";

const StyledEventButton = styled(Button)`
  padding: 2px;
  background-color: rgba(104, 161, 24, 93%);
  clip-path: polygon(
    5% 0,
    95% 0,
    100% 5%,
    100% 95%,
    95% 100%,
    5% 100%,
    0 95%,
    0 5%
  );

  &:hover {
    background-color: rgba(122, 235, 52, 93%);
  }
`;

interface Props {
  label: string;
  setOpen: () => void;
}

export const RightMenuButton: React.FC<Props> = ({ label, setOpen }) => {
  return (
    <StyledEventButton onClick={setOpen}>
      <Typography
        sx={{
          padding: "12px 16px",
          color: "rgba(122, 235, 52, 93%)",
          backgroundColor: "#081406",
          fontSize: "18px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          clipPath:
            "polygon(5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%, 0 5%)",
        }}
      >
        {label}
      </Typography>
    </StyledEventButton>
  );
};
