import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface CustomChipProps {
  labels: string[];
}

const CustomChip: React.FC<CustomChipProps> = ({ labels }) => {
  return (
    <Stack direction="row" spacing={1}>
      {labels?.map((label: string, index: number) => (
        <Chip key={index} label={label} variant="outlined" sx={{color:'rgb(220, 53, 75)', cursor:'pointer'}} />
      ))}
    </Stack>
  );
};

export default CustomChip;
