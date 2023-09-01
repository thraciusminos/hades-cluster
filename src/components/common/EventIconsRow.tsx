import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  openItems: number;
  depletedItems?: number;
  successsfulItems?: number;
  eventIcon: ReactNode;
  eventIconDepleted?: ReactNode;
  eventIconSuccessful?: ReactNode;
  boxProps?: BoxProps;
}

export const EventIconsRow: React.FC<Props> = ({
  openItems,
  depletedItems,
  successsfulItems,
  eventIcon,
  eventIconDepleted,
  eventIconSuccessful,
  boxProps,
}) => {
  let itemRow = [];

  for (let i = 0; i < (depletedItems || 0); i++) {
    itemRow.push(eventIconDepleted);
  }
  for (let i = 0; i < openItems; i++) {
    itemRow.push(eventIcon);
  }
  for (let i = 0; i < (successsfulItems || 0); i++) {
    itemRow.push(eventIconSuccessful);
  }
  return (
    <Box display="flex" {...boxProps}>
      {itemRow}
    </Box>
  );
};
