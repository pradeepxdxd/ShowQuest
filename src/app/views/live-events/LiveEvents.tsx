"use client";

import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import CardCarousel from "@/app/components/carousel/card/CardCarousel";
// import { liveEvent } from "@/app/data/live-events/data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getHomeShowByTypeData } from "@/app/store/show/show.slice";

const LiveEvents: React.FC = () => {
  const { homeLiveEvent } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHomeShowByTypeData("live-event"));
  }, [dispatch]);

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
      <CardCarousel liveEvent={homeLiveEvent} />
    </Box>
  );
};

export default LiveEvents;
