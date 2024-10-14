import React from "react";
import { Button, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/index";
import { logout } from "@/app/store/auth/auth.slice";

export default function LogoutButton() {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => dispatch(logout());

  return (
    <Button
      onClick={handleLogout}
      sx={{ width: "300px" }}
      variant="outlined"
      startIcon={<Logout sx={{ color: "pink" }} />}
      fullWidth
    >
      <Typography textTransform={"lowercase"}>Logout</Typography>
    </Button>
  );
}
