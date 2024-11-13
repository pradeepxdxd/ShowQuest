import React from "react";
import CustomDateSelector from "@/app/components/DateSelector/CustomDateSelector";
import CustomSelect from "@/app/components/select/CustomSelect";
import { Search } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";

export default function bookingfilter() {
  return (
    <>
      <Grid item md={12} sm={12} xs={12}>
        {" "}
        {/*sm={4} */}
        <CustomDateSelector />
      </Grid>
      <Box flexGrow={0.3} />
      <Grid
        item
        md={4}
        sm={4}
        xs={4}
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
      >
        {" "}
        {/*sm={1.5}*/}
        <CustomSelect />
      </Grid>
      <Grid
        item
        md={3}
        sm={3}
        xs={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {" "}
        {/*sm={1.5}*/}
        <CustomSelect />
      </Grid>
      <Grid
        item
        md={4}
        sm={4}
        xs={4}
        display={"flex"}
        justifyContent={"flex-start"}
        width={"100%"}
      >
        {" "}
        {/*sm={1.5}*/}
        <CustomSelect />
      </Grid>

      <Grid item md={1} sm={1} xs={1}>
        {" "}
        {/*sm={1} */}
        <IconButton>
          <Search />
        </IconButton>
      </Grid>
    </>
  );
}
