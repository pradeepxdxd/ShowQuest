import MovieCard from "@/app/views/recommended-movies/MovieCard/ReMovieCard";
import { Grid } from "@mui/material";
import { StaticImageData } from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

// Define the Movie interface
interface Movie {
  id: number;
  title: string;
  image: StaticImageData;
  rating: string;
  votes: string;
  genre: string;
}

// Define the props interface for the page component
interface PageProps {
  movies: Movie[];
}

const PostCarousel: React.FC<PageProps> = ({ movies }) => {
  return (
    <Carousel
      navButtonsAlwaysVisible
      indicators={false}
      autoPlay={false}
      sx={{ maxWidth: "100%" }}
    >
      {Array.from({ length: Math.ceil(movies.length / 5) }).map((_, index) => (
        <Grid container justifyContent="center" spacing={2} key={index}>
          {movies.slice(index * 5, index * 5 + 5).map((movie, i) => (
            <Grid item xs={6} sm={4} md={2.4} key={i}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
};

export default PostCarousel;
