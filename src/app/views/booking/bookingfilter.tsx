import React from "react";
import CustomDateSelector from "@/app/components/DateSelector/CustomDateSelector";
import CustomSelect from "@/app/components/select/CustomSelect";
import { Search } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";

export default function bookingfilter() {
  return (
    <>
      <Grid item sm={4}>
        <CustomDateSelector />
      </Grid>
      <Box flexGrow={0.3} />
      <Grid item sm={1.5}>
        <CustomSelect />
      </Grid>
      <Grid item sm={1.5}>
        <CustomSelect />
      </Grid>
      <Grid item sm={1.5}>
        <CustomSelect />
      </Grid>
      <Grid item sm={1}>
        <IconButton>
          <Search />
        </IconButton>
      </Grid>
    </>
  );
}
