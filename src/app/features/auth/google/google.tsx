import React from "react";
import { Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { googleSignIn } from "@/app/store/auth/auth.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

export default function GoogleAuthButton() {
  const dispatch: AppDispatch = useDispatch();
  const handleGoogleAuth = () => {
    dispatch(googleSignIn());
  };

  return (
    <Button
      onClick={handleGoogleAuth}
      startIcon={<Google sx={{ color: "pink" }} />}
      sx={{ width: "300px" }}
      variant="outlined"
      fullWidth
      disabled
    >
      <Typography textTransform={"lowercase"}>Continue with Google</Typography>
    </Button>
  );
}
