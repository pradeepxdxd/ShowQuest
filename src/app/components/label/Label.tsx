"use client";
import useResponsive from "@/app/hooks/useResponsive";
import { Typography } from "@mui/material";
import React from "react";

const Label: React.FC<{ text: string }> = ({ text }) => {
  const { showCardCount } = useResponsive();
  return (
    <Typography
      variant="h5"
      fontWeight={"normal"}
      textAlign={"left"}
      sx={{ ml: showCardCount <= 3 ? 5:0 }}
    >
      {text}
    </Typography>
  );
};

export default Label;
