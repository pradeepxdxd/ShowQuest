"use client";
import BookingSummaryCard from "@/app/components/cards/booking/BookingSummaryCard";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import TheatersIcon from "@mui/icons-material/Theaters";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Script from "next/script";
import { processPayment } from "@/app/features/payment/payment";

declare global {
  interface Window {
    Razorpay: never; // Declare Razorpay on the window object
  }
}

type WayToEnterInCinemaType = "M_TICKET" | "BOX_OFFICE_PICKUP";

export default function BookingSummary() {
  const [wayToEnterInCinema, setWayToEnterInCinema] =
    useState<WayToEnterInCinemaType>("M_TICKET");

  useEffect(() => {
    // Dynamically load the Razorpay script if not already available
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handlePayment = async () => {
    try {
      const res = await processPayment();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <BookingSummaryCard />
        <Box my={3}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            SELECT TICKET TYPE
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            row
            value={wayToEnterInCinema}
            onChange={(e) =>
              setWayToEnterInCinema(e.target.value as WayToEnterInCinemaType)
            }
          >
            <FormControlLabel
              value={"M_TICKET"}
              name="M_TICKET"
              control={<Radio color="error" />}
              label={
                <Box display="flex" alignItems="center">
                  <BookOnlineOutlinedIcon sx={{ mr: 1, color: "orange" }} />{" "}
                  <Typography color="warning" variant="body2">
                    M-Tickit
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              name="BOX_OFFICE_PICKUP"
              value={"BOX_OFFICE_PICKUP"}
              control={<Radio color="error" />}
              label={
                <Box display="flex" alignItems="center">
                  <TheatersIcon sx={{ mr: 1, color: "GrayText" }} />{" "}
                  <Typography color="error" variant="body2">
                    Box Office Pickup
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </Box>
        <Box>
          <Typography variant="caption">
            {wayToEnterInCinema === "M_TICKET"
              ? "Show the m-ticket QR Code on your mobile to enter the cinema."
              : "Select this option to pick your tickets from Box Office."}
          </Typography>
        </Box>
        <Box
          mt={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography variant="caption">
            <span style={{ marginRight: "3px" }}>
              <InfoOutlinedIcon sx={{ fontSize: "x-small" }} />
            </span>
            By proceeding, I express my consent to complete this transaction.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "5px",
              width: "100%",
              borderRadius: 2,
              bgcolor: "#f84464",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handlePayment}
          >
            <Typography component={"span"} textAlign={"start"}>
              TOTAL: RS.{760.89}
            </Typography>
            <Typography component={"span"} textAlign={"end"}>
              Proceed
            </Typography>
          </Button>
          <Typography
            mt={3}
            variant="caption"
            maxWidth={"90%"}
            fontSize={"x-small"}
          >
            You can cancel the tickets 20 min(s) before the show. Refunds will
            be done according to{" "}
            <span style={{ color: "#f84464", cursor: "pointer" }}>
              Cancellation Policy
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
