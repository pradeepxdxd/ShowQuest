import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import RoyalSeat from "./RoyalSeat";
import { royalSeats } from "@/app/data/seats/data";

export default function SeatRoyal({price, clientSeats}) {
  return (
    <>
      <Box>
        <Typography variant="caption">{price}</Typography>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={2}>
            <RoyalSeat clientSeats={clientSeats} />
          </Grid>
        </Box>
      </Box>
    </>
  );
}
