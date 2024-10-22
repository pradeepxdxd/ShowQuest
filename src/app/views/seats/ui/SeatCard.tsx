import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import RoyalSeat from "./RoyalSeat";
import { Seat } from "@/app/data/seats/data";

interface SeatCardType {
  price: string;
  clientSeats: Seat[];
  cost: number;
  seatType: string;
}

const SeatCard: React.FC<SeatCardType> = ({
  price,
  clientSeats,
  cost,
  seatType,
}) => {
  return (
    <>
      <Box>
        <Typography variant="caption">{price}</Typography>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={2}>
            <RoyalSeat
              clientSeats={clientSeats}
              cost={cost}
              seatType={seatType}
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SeatCard;
