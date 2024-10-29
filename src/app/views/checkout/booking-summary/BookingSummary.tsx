/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import BookingSummaryCard from "@/app/components/cards/booking/BookingSummaryCard";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import TheatersIcon from "@mui/icons-material/Theaters";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { addProceedToPayCost } from "@/app/store/ui/seat.slice";
import useRazorpayPayment from "@/app/hooks/useRazorpayPayment";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import CustomBackdrop from "@/app/components/backdrop/Backdrop";
import AddInfo from "@/app/components/modals/info/AddInfo";
import { sendBookingDetailsMail } from "@/app/store/booking/booking.slice";
import useOperationDelay from "@/app/hooks/useOperationDelay";
import { convertImageToBase64 } from "@/app/utils/image/image";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any; // Declare Razorpay on the window object
  }
}

type WayToEnterInCinemaType = "M_TICKET" | "BOX_OFFICE_PICKUP";

export default function BookingSummary() {
  const [wayToEnterInCinema, setWayToEnterInCinema] =
    useState<WayToEnterInCinemaType>("M_TICKET");
  const [backgroundLoading, setbackgroundLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const { proceedToPayPayment } = useSelector((state: RootState) => state.seat);
  const { userCookie } = useSelector((state: RootState) => state.auth);

  // mail content
  const { ticketDetails, totalSeatCost, theaterDetails } = useSelector(
    (state: RootState) => state.seat
  );
  const { totalPrice } = useSelector((state: RootState) => state.beverage);

  // razorpay
  const { loading, success, error, handlePayment } = useRazorpayPayment(
    proceedToPayPayment * 100,
    "INR",
    "discription",
    setbackgroundLoading
  );
  const { operationHandler } = useOperationDelay<boolean>();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    return () => {
      dispatch(addProceedToPayCost(0));
    };
  }, []);

  const handleClose = (event: object, reason: string) => {
    if (reason && reason === "backdropClick") return;
    else setOpen(false);
  };

  const handlePaymentClick = () => {
    if (userCookie?.name && userCookie?.email) {
      try {
        // 4808557848741463	05/25
        handlePayment(
          userCookie.name,
          userCookie.email,
          (userCookie?.photo || "")
        );
        setbackgroundLoading(true);
      } catch (err) {
        console.log(err);
      }
    } else setOpen(true);
  };

  useEffect(() => {
    if (success) {
      operationHandler(5000, setbackgroundLoading, false);
      getPayload()
        .then((payload) => dispatch(sendBookingDetailsMail(payload)))
        .catch((err) => console.log(err));
      router.push("/pages/main/enjoy-your-show");
    } else if (error) {
      setbackgroundLoading(false);
      toast.error(error);
    }
  }, [error, router, success]);

  const getPayload = async () => {
    const showName = theaterDetails?.showName;
    const showImage = theaterDetails?.image?.src
      ? await convertImageToBase64(theaterDetails?.image?.src)
      : theaterDetails?.showImage;
    const showSeatName = ticketDetails;
    const showPrice = totalSeatCost;
    const theaterName = theaterDetails?.theaterName;
    const showTime = theaterDetails?.timing;
    const foodPrice = totalPrice;
    const finalPrice = proceedToPayPayment;
    const email = userCookie?.email;
    return {
      email,
      showName,
      showImage,
      showSeatName,
      showPrice,
      theaterName,
      showTime,
      foodPrice,
      finalPrice,
    };
  };

  return (
    <>
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
            onClick={handlePaymentClick}
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={16} color="error" /> : null
            }
          >
            <Typography component={"span"} textAlign={"start"}>
              TOTAL: RS.{proceedToPayPayment}
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
      <CustomBackdrop open={backgroundLoading} />
      <AddInfo
        open={open}
        handleClose={handleClose}
        handlePayment={handlePayment}
        loading={setbackgroundLoading}
      />
    </>
  );
}
