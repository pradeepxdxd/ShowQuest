"use client";

import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import PosterCarousel from "@/app/components/carousel/poster/PostCarousel";
import { StaticImageData } from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getHomeShowByTypeData } from "@/app/store/show/show.slice";

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
  const { homeMovies, Moviesloading } = useSelector(
    (state: RootState) => state.show
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHomeShowByTypeData("movie"));
  }, [dispatch]);

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
      <PosterCarousel movies={homeMovies} loading={Moviesloading} />
    </Box>
  );
};

export default MovieCarousel;
