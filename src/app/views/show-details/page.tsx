import React from "react";
import { Movie } from "@/app/types/movie.type";
import Poster from "./poster/poster";
import { Box, Divider, Typography } from "@mui/material";
import ProfileCarousel from "@/app/components/carousel/profile/page";
import { castData } from "@/app/data/cast/data";
import { crewData } from "@/app/data/crew/data";
import { LiveEventImage } from "@/app/data/live-events/data";
import { Premiere } from "@/app/data/premiere/data";

interface ShowDetailsProp {
  data: Movie | LiveEventImage | Premiere;
}

const MovieDetails: React.FC<ShowDetailsProp> = ({ data }) => {
  console.log({castData, env:process.env})
  return (
    <>
      <Poster data={data} />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={"85%"} margin={5}>
          <Typography variant="h5" fontWeight={"bold"} fontFamily={"revert"}>
            About the movie
          </Typography>
          <Typography mt={3} variant="body1">
            The film`s backdrop is centered around the far and forgotten coastal
            lands of India.The people,or rather the villains,in the film neither
            fear death nor god and there is no sense of humanity among them.
            Devara changes this scenario in his inimitable style.
          </Typography>

          <Divider sx={{ my: 4 }} />
          <Typography
            my={2}
            variant="h5"
            fontWeight={"bold"}
            fontFamily={"revert"}
          >
            Cast
          </Typography>
          <Box display={"flex"}>
            <ProfileCarousel data={castData} />
          </Box>
          <Divider sx={{ my: 4 }} />
          <Typography
            my={2}
            variant="h5"
            fontWeight={"bold"}
            fontFamily={"revert"}
          >
            Crew
          </Typography>
          <Box display={"flex"}>
            <ProfileCarousel data={crewData} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieDetails;
