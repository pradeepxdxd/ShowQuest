"use client";
import useAuth from "@/app/hooks/useAuth";
import useResponsive from "@/app/hooks/useResponsive";
import MovieButton from "@/app/views/admin/movies/MovieButton";
import { Typography } from "@mui/material";
import React from "react";

const Label: React.FC<{
  text: string;
  userPayload: { id: string; role: string } | null;
  route : string;
}> = ({ text, userPayload, route }) => {
  const user = useAuth();
  const { showCardCount } = useResponsive();
  return (
    <>
      <Typography
        variant="h5"
        fontWeight={"normal"}
        textAlign={"left"}
        sx={{ ml: showCardCount <= 3 ? 5 : 0 }}
      >
        {text}
      </Typography>
      {user &&
        userPayload &&
        typeof userPayload?.role === "string" &&
        userPayload?.role === "ADMIN" && <MovieButton showType={route} />}
    </>
  );
};

export default Label;
