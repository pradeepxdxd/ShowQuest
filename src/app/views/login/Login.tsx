"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GoogleAuth from "@/app/features/auth/google/google";
import ContactAuth from "@/app/features/auth/contact/contact";
import EmailAuth from "@/app/features/auth/email/email";
import Link from "next/link";
import { AppleLoginButton } from "@/app/features/auth/apple/appleLogin";
import { EmailInput } from "@/app/components/modals/auth/email/EmailInput";
import { OTP } from "@/app/components/modals/auth/otp/OtpModal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { AuthState } from "@/app/store/auth/auth.slice";
import { PhoneInput } from "@/app/components/modals/auth/phone/PhoneInput";
import { IconButton, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  bgcolor: "background.paper",
  borderRadius: "5px",
  p: 4,
  height: "555px",
};

const Login = () => {
  const [showEmailInput, setShowEmailInput] = React.useState<boolean>(false);
  const [showPhoneInput, setShowPhoneInput] = React.useState<boolean>(false);
  const [showOTPInput, setShowOTPInput] = React.useState<boolean>(false);

  const { email }: AuthState = useSelector((state: RootState) => state.auth);
  const router = useRouter()

  const handleReturn = () => {
    router.push('/');
  }

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => {}}
      >
        <Box sx={style}>
          {showOTPInput && showEmailInput ? (
            <OTP
              setShowEmailInput={setShowEmailInput}
              setShowOTPInput={setShowOTPInput}
              email={email || ""}
            />
          ) : showEmailInput ? (
            <EmailInput
              setShowEmailInput={setShowEmailInput}
              setShowOTPInput={setShowOTPInput}
            />
          ) : showPhoneInput ? (
            <PhoneInput
              setShowOTPInput={setShowOTPInput}
              setShowPhoneInput={setShowPhoneInput}
            />
          ) : (
            <>
              <Box display="flex" justifyContent="center" position="relative">
                <Typography
                  id="modal-modal-title"
                  variant="body1"
                  fontWeight={500}
                  component="h2"
                  textAlign="center"
                >
                  Get Started
                </Typography>
                <IconButton
                  onClick={handleReturn}
                  sx={{
                    position: "absolute",
                    bottom: -6,
                    right: 0,
                  }}
                >
                  <Close />
                </IconButton>
              </Box>

              <Box
                mt={5}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <div style={{ margin: 15 }}>
                  <GoogleAuth />
                </div>
                <div
                  onClick={() => {
                    setShowEmailInput(true);
                  }}
                  style={{ margin: 15 }}
                >
                  <EmailAuth />
                </div>
                <div style={{ margin: 15 }}>
                  <AppleLoginButton />
                </div>
                <div
                  onClick={() => {
                    setShowPhoneInput(true);
                  }}
                  style={{ margin: 15 }}
                >
                  <ContactAuth />
                </div>
              </Box>

              <Box
                mt={4}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                position="absolute"
                bottom={20}
                width="85%"
              >
                <Typography variant="caption" textAlign="center">
                  I agree to the
                  <Link href={"#"}>Terms and Conditions</Link> &{" "}
                  <Link href={"#"}>Privacy Policy</Link>
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
