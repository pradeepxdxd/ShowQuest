import React from "react";
import { Button, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";

export default function email() {
  return (
    <Button
      variant="outlined"
      startIcon={<Email sx={{ color: "orange" }} />}
      sx={{width:'300px'}}
    >
      <Typography textTransform={"lowercase"}>Continue with Email</Typography>
    </Button>
  );
}
