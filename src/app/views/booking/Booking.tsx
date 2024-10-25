"use client";
import { getLiveEvent, getMovies, getPremiereMovies } from "@/service/api/api";
import { useParams } from "next/navigation";
import Title from "@/app/views/booking/title";
import { Box, Divider, Grid } from "@mui/material";
import BookingFilter from "@/app/views/booking/bookingfilter";
import ShowCard from "@/app/components/cards/booking/ShowCard";
import { theaterData } from "@/app/data/theater/data";
import { useEffect } from "react";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { setShowType } from "@/app/store/ui/seat.slice";

const ShowBooking = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const show =
    id[0] === "movie"
      ? getMovies(Number(id[2]))
      : id[0] === "live-event"
      ? getLiveEvent(Number(id[2]))
      : getPremiereMovies(Number(id[2]));

  useEffect(() => {
    dispatch(setShowType(id[0]));
  }, [id, dispatch]);

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={150}
          flexDirection={"column"}
        >
          <Title title={show.title} genre={show.genre} id={show.id} />
        </Box>
        <Divider />
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <BookingFilter />
        </Grid>
        <Box
          bgcolor={"rgb(245, 245, 245)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ShowCard data={theaterData} showid={show.id} />
        </Box>
      </Box>
    </>
  );
};

export default ShowBooking;
