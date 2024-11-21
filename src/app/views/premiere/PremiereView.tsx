"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import premiereBannarImage from "@/app/assets/premiere/premiere-banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getHomeShowByTypeData } from "@/app/store/show/show.slice";
import PostCarousel from "@/app/components/carousel/poster/PostCarousel";

export default function PremiereView() {
  const { homePremiere, Premiereloading } = useSelector(
    (state: RootState) => state.show
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHomeShowByTypeData("premiere"));
  }, [dispatch]);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Image src={premiereBannarImage} alt="premiere-banner" width={1300} />
      </Box>
      <Box mt={3} ml={16}>
        <Typography color="white" variant="h5" fontWeight={"bold"}>
          Premieres
        </Typography>
        <Typography color="white" variant="body2" fontWeight={"small"}>
          Brand new releases every Friday
        </Typography>
      </Box>
      <Box p={5}>
        <PostCarousel movies={homePremiere} loading={Premiereloading} type={'premiere'} />
      </Box>
    </>
  );
}
