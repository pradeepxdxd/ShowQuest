"use client";
import { getMovies } from "@/service/api/api";
import { useParams } from "next/navigation";
import Title from "@/app/views/booking/title";
import { Box, Divider, Grid } from "@mui/material";
import BookingFilter from "@/app/views/booking/bookingfilter";
import ShowCard from "@/app/components/cards/booking/ShowCard";
import { theaterData } from "@/app/data/theater/data";

const ShowBooking = () => {
  const { id } = useParams();
  const show = getMovies(Number(id[1]));
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
