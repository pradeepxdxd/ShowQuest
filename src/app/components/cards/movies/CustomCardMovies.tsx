import type { MovieCardProps, Movie } from "@/app/types/movie.type";
import CustomMovieCards from "./movie-card/CustomMovieCard";
import { Grid } from "@mui/material";

const CustomCardMovies: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <>
      <Grid container spacing={2}>
        {movie.map((prop: Movie, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CustomMovieCards card={prop} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CustomCardMovies;
