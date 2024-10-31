import React from "react";
import Carousel from "@/app/components/carousel/fullsize/FullSizeCarousel";
import MoviesInCity from "@/app/views/movies/MovieView";
import FilterComponent from "@/app/components/filter-card/movies/FilterCard";
import CustomChip from "@/app/components/chip/CustomChip";

import { Box, Grid, Typography } from "@mui/material";

const lang: string[] = [
  "English",
  "Hindi",
  "Bangali",
  "Marathi",
  "Panjabi",
  "Telugu",
  "Hinglish",
  "Japanese",
  "Tamil",
  "Bhojpuri",
];

export default function Movies() {
  return (
    <>
      <Carousel />
      <Grid container spacing={3}>
        <Grid item lg={4}>
          <Box mt={7}>
            <Typography
              variant="h5"
              fontWeight={"normal"}
              fontFamily={"sans-serif"}
              textAlign={"center"}
              mr={9}
            >
              Filters
            </Typography>
            <Box
              mt={1}
              display={"flex"}
              justifyContent={"right"}
              alignItems={"right"}
            >
              <FilterComponent />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={8}>
          <Box mt={7}>
            <Box
              display={"flex"}
              justifyContent={"left"}
              alignItems={"left"}
              flexDirection={"column"}
            >
              <Typography
                variant="h5"
                fontWeight={"normal"}
                fontFamily={"sans-serif"}
                textAlign={"left"}
                mr={9}
              >
                Movies In Indore
              </Typography>
              <Box mt={3}>
                <CustomChip labels={lang} />
              </Box>
            </Box>
            <Box
              mt={5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={900}
            >
              <MoviesInCity />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box mt={5}></Box>
    </>
  );
}

export const generateMetadata = () => {
  return {
    title:
      "Pune Movie Tickets Online Booking & Showtimes near you - BookMyShow",
    description:
      "Online movie ticket bookings for the Bollywood, Hollywood, Tamil, Telugu and other regional films showing near you in Pune. Check out the List of latest movies running in nearby theatres and multiplexes in Pune, for you to watch this weekend on BookMyShow.",
  };
};
