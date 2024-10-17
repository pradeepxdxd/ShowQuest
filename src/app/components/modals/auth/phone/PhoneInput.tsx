import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { useState } from "react";
import Phone from "@/app/components/input/Phone";
import { useState } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "@/firebase/config";

interface PhoneInputProp {
  setShowPhoneInput: (param: boolean) => void;
  setShowOTPInput: (param: boolean) => void;
}

export const PhoneInput: React.FC<PhoneInputProp> = ({
  setShowPhoneInput,
  setShowOTPInput,
}) => {
  //   const [validMail, setValidMail] = useState<boolean>(true);
  const [phone, setPhone] = useState("");

  const handleSendOtp = () => {
    // const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {})
    // const confirmation = signInWithPhoneNumber(auth, `+${phone}`, recaptcha);
    setShowOTPInput(true);
  };

  const handleBack = () => {
    setShowPhoneInput(false);
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
            Login with Phone
          </Typography>
        </Box>
        <Phone phone={phone} setPhone={setPhone} />
        <div
          style={{ marginTop: "12px", marginRight: "7px" }}
          id="recaptcha"
        ></div>
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
            // disabled={validMail}
            sx={{
              width: "80%",
              position: "absolute",
              bottom: "20px",
              bgcolor: "rgb(248, 68, 100)",
            }}
            onClick={handleSendOtp}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};
