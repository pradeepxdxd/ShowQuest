import CustomMovieCards from "./movie-card/CustomMovieCard";
import { Grid } from "@mui/material";
import { ShowResponse } from "@/firebase/actions/action.types";

const CustomCardMovies: React.FC<{
  movie: ShowResponse[];
  userPayload: { id: string; role: string };
  showType: string;
}> = ({ movie, userPayload, showType }) => {
  return (
    <>
      <Grid container spacing={2}>
        {movie.map((prop: ShowResponse, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CustomMovieCards
              card={prop}
              userPayload={userPayload}
              showType={showType}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CustomCardMovies;
