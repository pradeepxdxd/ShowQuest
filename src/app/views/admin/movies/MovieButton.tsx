"use client";
import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export default function MovieButton({showType}) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/pages/admin/add-show/${showType}`);
  };
  return <Button onClick={handleRedirect} variant="outlined" color="error">
    Add
  </Button>;
}
