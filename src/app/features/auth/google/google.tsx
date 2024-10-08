import React from "react";
import { Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

export default function google() {
  return (
    <Button sx={{width:'300px'}} variant="outlined" startIcon={<Google sx={{color:'pink'}} />} fullWidth>
      <Typography textTransform={'lowercase'}>Continue with Google</Typography>
    </Button>
  );
}
