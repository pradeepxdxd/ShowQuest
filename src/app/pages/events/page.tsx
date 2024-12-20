import React from "react";
import Carousel from "@/app/components/carousel/fullsize/FullSizeCarousel";
import MoviesInCity from "@/app/views/movies/MovieView";
import FilterComponent from "@/app/components/filter-card/movies/FilterCard";
import CustomChip from "@/app/components/chip/CustomChip";
import { Box, Grid, Typography } from "@mui/material";
import { getUserPayloadData } from "@/app/server/uid";
import Label from "@/app/components/label/Label";

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
  const userPayload = getUserPayloadData();
  return (
    <>
      <Carousel />
      <Grid container spacing={3}>
        <Grid item lg={4} md={4}>
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
        <Grid item lg={8} md={8}>
          <Box mt={7}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width="88%"
              >
                <Label
                  text="Live Events in Indore"
                  userPayload={userPayload}
                  route="live-event"
                />
                {/* {userPayload &&
                  typeof userPayload?.role === "string" &&
                  userPayload?.role === "ADMIN" && (
                    <MovieButton showType={"live-event"} />
                  )} */}
              </Box>

              <Box mt={3}>
                <CustomChip labels={lang} />
              </Box>
            </Box>

            <Box
              mt={5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              maxWidth={900}
            >
              <MoviesInCity userPayload={userPayload} showType={"live-event"} />
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
    title: "Top Upcoming Events in Pune | Best Live Events in Pune - ShowQuest",
    description:
      "Book tickets for best upcoming events in Pune. Explore music, comedy, workshops, online events near you in Pune on ShowQuest.",
  };
};
