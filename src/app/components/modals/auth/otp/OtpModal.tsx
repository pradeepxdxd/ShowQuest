"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import OTPInput from "@/app/components/input/OTP";
import {
  clearEmail,
  clearError,
  loginWithGmail,
  // setVerifiedFalse,
  verifyOtp,
} from "@/app/store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { toast } from "react-toastify";
import { isEmpty } from "@/app/utils/object/object";

interface OTPProp {
  setShowEmailInput: (param: boolean) => void;
  setShowOTPInput: (param: boolean) => void;
  email: string;
}

export const OTP: React.FC<OTPProp> = ({
  setShowEmailInput,
  setShowOTPInput,
  email,
}) => {
  const [otp, setOtp] = React.useState("");
  const [counter, setCounter] = useState<number>(30);
  const [validOtp, setValidOtp] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();
  const { verified, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (counter > 0) {
      const fn = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

      return () => clearTimeout(fn);
    }
  }, [counter]);

  useEffect(() => {
    if (verified) {
      // toast.success("Logged in successfully");
      setShowEmailInput(false);
      setShowOTPInput(false);
      // dispatch(setVerifiedFalse());
    }
    if (error !== null && !isEmpty(error)) {
      toast.error("Invalid OTP");
      dispatch(clearError());
    }
  }, [setShowEmailInput, setShowOTPInput, verified, error, dispatch]);

  const handleSubmit = () => {
    // if (flag === "email") {
    dispatch(verifyOtp({ email, otpCode: otp }));
    dispatch(clearEmail());
    // } else if (flag === "phone") {
    // }
  };

  const handleResend = () => {
    // if (flag === "email") {
    dispatch(loginWithGmail(email || ""));
    setCounter(30);
    // }
  };

  return (
    <>
      <ArrowBackIosIcon
        sx={{ fontWeight: "lighter", cursor: "pointer" }}
        onClick={() => setShowOTPInput(false)}
      />
      <Box
        mt={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box alignSelf={"flex-start"}>
          <Typography variant="h5" textAlign={"left"} fontWeight={"bold"}>
            Verify Your Email Address
          </Typography>
          <Typography
            mt={1}
            variant="body2"
            textAlign={"left"}
            fontWeight={"normal"}
          >
            Enter OTP sent to {email}
          </Typography>
          <Box mt={2}>
            <OTPInput setValidOtp={setValidOtp} otp={otp} setOtp={setOtp} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              bottom: "70px",
            }}
          >
            Expected OTP in {counter} seconds{" "}
            {counter === 0 && (
              <span
                onClick={handleResend}
                style={{ color: "rgb(248, 68, 100)", cursor: "pointer" }}
              >
                Resend
              </span>
            )}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disabled={validOtp}
            sx={{
              width: "80%",
              position: "absolute",
              bottom: "20px",
              bgcolor: "rgb(248, 68, 100)",
            }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};
