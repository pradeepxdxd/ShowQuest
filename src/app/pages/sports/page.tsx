import React from "react";
import Carousel from "@/app/components/carousel/fullsize/page";
import MoviesInCity from "@/app/views/movies/page";
import FilterComponent from "@/app/components/filter-card/movies/page";
import CustomChip from "@/app/components/chip/page";

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
                Premiere Of The Week
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
    title: "Top Upcoming Sports Events in Pune | Live Sports in Pune - BookMyShow",
    description:
      "Dharmaveer: Mukkam Post Thane 2 (2024), Biography Drama released in Marathi Hindi language in theatre near you in pune. Know about Film reviews, lead cast & crew,  photos & video gallery on BookMyShow.",
  };
};
