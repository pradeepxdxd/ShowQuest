"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import PosterCarousel from "@/app/components/carousel/poster/page";
import { movies } from "@/app/data/recommanded-movies/data";
import { StaticImageData } from "next/image";

// Define the Movie interface
interface Movie {
  title: string;
  image: StaticImageData; // Adjust if using StaticImageData
  rating: string;
  votes: string;
  genre: string;
}

// Define the props interface for the page component
export interface PageProps {
  movies: Movie[];
}

const MovieCarousel: React.FC = () => {
  return (
    <Box p={5}>
      <Typography
        variant="h5"
        gutterBottom
        fontSize={"xx-larger"}
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
      >
        Recommended Movies
      </Typography>
      <PosterCarousel movies={movies} />
    </Box>
  );
};

export default MovieCarousel;
