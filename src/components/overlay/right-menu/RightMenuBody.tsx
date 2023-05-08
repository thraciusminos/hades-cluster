import React from "react";
import { styled, Box } from "@mui/material";

const StyledMenuBody = styled(Box)`
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

  .menuBody {
    padding: 8px 16px 24px;
    background-color: #081406;
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
  }
`;

interface Props {
  children: React.ReactNode;
}

export const RightMenuBody: React.FC<Props> = ({ children }) => {
  return (
    <StyledMenuBody>
      <div className="menuBody">{children}</div>
    </StyledMenuBody>
  );
};
