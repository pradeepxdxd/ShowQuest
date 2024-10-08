"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import CardCarousel from "@/app/components/carousel/card/page";
import { liveEvent } from "@/app/data/live-events/data";

const LiveEvents: React.FC = () => {
  return (
    <Box p={5}>
      <Typography
        variant="h5"
        gutterBottom
        fontSize={"xx-larger"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
        ml={2}
      >
        The Best of Live Events
      </Typography>
      <CardCarousel liveEvent={liveEvent} />
    </Box>
  );
};

export default LiveEvents;
