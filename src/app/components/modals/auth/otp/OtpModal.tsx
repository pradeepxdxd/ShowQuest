import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import OTPInput from "@/app/components/input/OTP";

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
  const handleSubmit = () => {
    setShowEmailInput(false);
    setShowOTPInput(false);
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
            <OTPInput />
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
            Expected OTP in 3 seconds
          </Typography>
          <Button
            variant="contained"
            color="primary"
            // disabled={true}
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
