import MovieCard from "@/app/views/recommended-movies/MovieCard/ReMovieCard";
import { ShowResponse } from "@/firebase/actions/action.types";
import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import SkeletonCard from "../../skeleton/Skeleton";

interface PageProps {
  movies: ShowResponse[];
  loading?: boolean;
}

const PostCarousel: React.FC<PageProps> = ({ movies, loading = true }) => {
  return (
    <>
      {loading ? (
        <>
          <Carousel
            // navButtonsAlwaysVisible
            indicators={false}
            autoPlay={false}
            sx={{ maxWidth: "100%" }}
          >
            <Grid container direction="row" justifyContent="center" spacing={3}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Grid item xs={6} sm={4} md={2.4} key={i}>
                  <SkeletonCard />
                </Grid>
              ))}
            </Grid>
          </Carousel>
        </>
      ) : (
        <>
          <Carousel
            navButtonsAlwaysVisible
            indicators={true}
            autoPlay={true}
            sx={{ maxWidth: "100%" }}
          >
            {Array.from({ length: Math.ceil(movies.length / 5) }).map(
              (_, index) => (
                <Grid container justifyContent="center" spacing={2} key={index}>
                  {movies.slice(index * 5, index * 5 + 5).map((movie, i) => (
                    <Grid item xs={6} sm={4} md={2.4} key={i}>
                      <MovieCard movie={movie} />
                    </Grid>
                  ))}
                </Grid>
              )
            )}
          </Carousel>
        </>
      )}
    </>
  );
};

export default PostCarousel;
