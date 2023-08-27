import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  eventItems: number;
  depletedItems?: number;
  successsfulItems?: number;
  icon: ReactNode;
}

export const EventIconsRow: React.FC<Props> = ({
  eventItems,
  depletedItems,
  successsfulItems,
  icon,
}) => {
  return (
    <Box display="flex" justifyContent="center" gap={0.5}>
      {!!depletedItems && (
        <>
          {depletedItems >= 1 && icon}
          {depletedItems >= 2 && icon}
          {depletedItems >= 3 && icon}
          {depletedItems === 4 && icon}
        </>
      )}
      {eventItems >= 1 && icon}
      {eventItems >= 2 && icon}
      {eventItems >= 3 && icon}
      {eventItems === 4 && icon}
      {!!successsfulItems && (
        <>
          {successsfulItems >= 1 && icon}
          {successsfulItems >= 2 && icon}
          {successsfulItems >= 3 && icon}
          {successsfulItems === 4 && icon}
        </>
      )}
    </Box>
  );
};
