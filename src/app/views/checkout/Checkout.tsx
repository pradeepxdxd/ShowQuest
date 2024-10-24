'use client'
import { Box, Grid } from "@mui/material";
import Beverage from "./beverage/Beverage";
import BookingSummary from "./booking-summary/BookingSummary";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Checkout = () => {
  const router = useRouter()
  const {clientSeats} = useSelector((state : RootState) => state.seat)

  useEffect(() => {
    if (clientSeats.length === 0) router.back()
  }, [router, clientSeats])

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        m={3}
      >
        <Box width={"85%"}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Beverage />
            </Grid>
            <Grid
              item
              sm={4}
            >
              <BookingSummary />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
