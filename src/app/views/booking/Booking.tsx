"use client";
// import { getLiveEvent, getMovies, getPremiereMovies } from "@/service/api/api";
import { useParams } from "next/navigation";
import Title from "@/app/views/booking/title";
import { Box, Divider, Grid } from "@mui/material";
import BookingFilter from "@/app/views/booking/bookingfilter";
import ShowCard from "@/app/components/cards/booking/ShowCard";
import { theaterData } from "@/app/data/theater/data";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { setShowType } from "@/app/store/ui/seat.slice";
import { getShowByIdData } from "@/app/store/show/show.slice";

const ShowBooking = () => {
  const { id } = useParams();
  const { show } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  // const show =
  //   id[0] === "movie"
  //     ? getMovies(Number(id[2]))
  //     : id[0] === "live-event"
  //     ? getLiveEvent(Number(id[2]))
  //     : getPremiereMovies(Number(id[2]));

  useEffect(() => {
    dispatch(setShowType(id[0]));
    dispatch(getShowByIdData(id[2]));
  }, [id, dispatch]);

  useEffect(() => {
    if (show?.type) dispatch(setShowType(show?.type));
  }, [dispatch, show]);

  return (
    <>
      {show && (
        <Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={150}
            flexDirection={"column"}
          >
            <Title
              title={show?.title as string}
              genre={show?.genre as string[]}
              id={show?.id as string}
            />
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
            <ShowCard data={theaterData} showid={show?.id as string} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ShowBooking;
