import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

export default function CustomSelect() {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={'English - 3D'}
      >
        <MenuItem value={'English - 3D'}>English - 3D</MenuItem>
        <MenuItem value={10}>English - IMAX-3D</MenuItem>
        <MenuItem value={20}>Hindi - 4DX 3D</MenuItem>
        <MenuItem value={20}>English - 4DX 3D</MenuItem>
        <MenuItem value={30}>English - ICE 3D</MenuItem>
      </Select>
    </FormControl>
    </>
  );
}
