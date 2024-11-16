import React from "react";
import { Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { googleSignIn } from "@/app/store/auth/auth.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

interface GoogleAuth {
  handleClose: (
    event: React.MouseEvent<HTMLButtonElement> | object,
    reason: string
  ) => void;
}

const GoogleAuthButton: React.FC<GoogleAuth> = ({ handleClose }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleGoogleAuth = () => {
    dispatch(googleSignIn());
    handleClose({}, "close");
  };

  return (
    <Button
      onClick={handleGoogleAuth}
      startIcon={<Google sx={{ color: "pink" }} />}
      sx={{ width: "300px" }}
      variant="outlined"
      fullWidth
    >
      <Typography textTransform={"lowercase"}>Continue with Google</Typography>
    </Button>
  );
};

export default GoogleAuthButton;
