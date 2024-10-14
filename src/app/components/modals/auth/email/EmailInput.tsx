import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Email from "@/app/components/input/Email";

interface EmailInputProp {
  setShowEmailInput: (param: boolean) => void;
  setShowOTPInput: (param: boolean) => void;
}

export const EmailInput: React.FC<EmailInputProp> = ({
  setShowEmailInput,
  setShowOTPInput,
}) => {
  const handleOtp = () => {
    setShowOTPInput(true);
  };

  return (
    <>
      <ArrowBackIosIcon
        sx={{ fontWeight: "lighter", cursor: "pointer" }}
        onClick={() => setShowEmailInput(false)}
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
        <Email />
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
            // disabled={true}
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
