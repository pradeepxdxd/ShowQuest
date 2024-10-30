'use client'
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Email from "@/app/components/input/Email";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { clearEmail, loginWithGmail } from "@/app/store/auth/auth.slice";
import { useState } from "react";

interface EmailInputProp {
  setShowEmailInput: (param: boolean) => void;
  setShowOTPInput: (param: boolean) => void;
}

export const EmailInput: React.FC<EmailInputProp> = ({
  setShowEmailInput,
  setShowOTPInput,
}) => {
  const [validMail, setValidMail] = useState<boolean>(true);
  const { email } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleOtp = () => {
    setShowOTPInput(true);
    dispatch(loginWithGmail(email || ""));
  };

  const handleBack = () => {
    setShowEmailInput(false);
    dispatch(clearEmail());
  };

  return (
    <>
      <ArrowBackIosIcon
        sx={{ fontWeight: "lighter", cursor: "pointer" }}
        onClick={handleBack}
      />
      <Box
        mt={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box alignSelf={"flex-start"}>
          <Typography variant="h6" textAlign={"left"} fontWeight={"bold"}>
            Login with Email
          </Typography>
        </Box>
        <Email setValidMail={setValidMail} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={validMail}
            sx={{
              width: "80%",
              position: "absolute",
              bottom: "20px",
              bgcolor: "rgb(248, 68, 100)",
            }}
            onClick={handleOtp}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};
