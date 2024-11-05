import MovieCard from "@/app/views/recommended-movies/MovieCard/ReMovieCard";
import { ShowResponse } from "@/firebase/actions/action.types";
import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

interface PageProps {
  movies: ShowResponse[];
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
