"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Box, Divider } from "@mui/material";
import Card from "@/app/components/cards/admin/Card";
import SocialCards from "@/app/components/cards/admin/SocialCards";

const ExchangeRateChart = dynamic(
  () => import("@/app/features/chart/IncomeAnualChart"),
  { ssr: false }
);

export default function Dashboard() {
  return (
    <>
      <Box>
        <ExchangeRateChart />
        <Divider />
        <Card />
        <Divider sx={{mt:4}} />
        <SocialCards />
      </Box>
    </>
  );
}
