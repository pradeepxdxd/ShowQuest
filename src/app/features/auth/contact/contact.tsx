import React from "react";
import { Button, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";

export default function ContactAuth() {
  return (
    <Button sx={{width:'300px'}} variant="outlined" startIcon={<Phone sx={{ color: "skyblue" }} />} fullWidth>
      <Typography textTransform={"lowercase"}>Continue with Phone</Typography>
    </Button>
  );
}
