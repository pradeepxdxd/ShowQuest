import { TextField } from "@mui/material";
import React from "react";

export default function Email() {
  return (
    <>
      <TextField
        fullWidth
        id="fullWidth"
        sx={{
          mt: 5,
          height: "40px", // Decrease the height
          "& .MuiInputBase-root": {
            height: "100%", // Ensure the input element inside takes up full height
          },
          "& input": {
            padding: "8px", // Adjust padding inside the input to suit the new height
            border: "none",
          },
        }}
      />
    </>
  );
}
