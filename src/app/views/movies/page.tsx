import React from "react";
import CustomMovieCard from "@/app/components/cards/movies/page";
import { movies } from "@/app/data/recommanded-movies/data";

function Movies() {
  return (
    <>  
      <CustomMovieCard movie={movies} />
    </>
  );
}

export default Movies;
