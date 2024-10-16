import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Email from "@/app/components/input/Email";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  clearEmail,
  loginWithGmail,
  phoneSignIn,
} from "@/app/store/auth/auth.slice";
import { useEffect, useState } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/firebase/config";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier | null;
  }
}

interface EmailInputProp {
  setShowEmailInput: (param: boolean) => void;
  setShowOTPInput: (param: boolean) => void;
  flag: string;
}

export const EmailInput: React.FC<EmailInputProp> = ({
  setShowEmailInput,
  setShowOTPInput,
  flag,
}) => {
  const [validMail, setValidMail] = useState<boolean>(true);
  const { email } = useSelector((state: RootState) => state.auth);
  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (flag === "phone" && !recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
        }
      );
      
      setRecaptchaVerifier(window.recaptchaVerifier);
    }
  }, [flag, recaptchaVerifier]);

  const handleOtp = () => {
    if (flag === "email") {
      setShowOTPInput(true);
      dispatch(loginWithGmail(email || ""));
    } else if (flag === "phone") {
      if (recaptchaVerifier) {
        dispatch(
          phoneSignIn({
            phoneNumber: email || "",
            recaptchaVerifier: recaptchaVerifier,
          })
        );
        setShowOTPInput(true);
      } else {
        console.error("RecaptchaVerifier is not initialized.");
      }
    }
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
            Login with{" "}
            {flag === "email" ? (
              <span>Email</span>
            ) : flag === "phone" ? (
              <span>Phone</span>
            ) : null}
          </Typography>
        </Box>
        <Email setValidMail={setValidMail} flag={flag} />
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
        {/* <div id="recaptcha-container"></div> */}
        {/* <div
          id="recaptcha-container"
          data-sitekey="6LcsaxsdAAAAAEBn0sPDCEncnU9564MisyRuDzD_"
          data-callback="sendForm"
          data-size="invisible"
        ></div> */}
        <div id="recaptcha-container"></div>
      </Box>
    </>
  );
};
