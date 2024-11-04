"use client";
import React, { useEffect } from "react";
import CustomMovieCard from "@/app/components/cards/movies/CustomCardMovies";
// import { movies } from "@/app/data/recommanded-movies/data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getShowByTypeData } from "@/app/store/show/show.slice";

function Movies({userPayload}) {
  const { shows } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getShowByTypeData("movie"));
  }, [dispatch]);

  return (
    <>
      <CustomMovieCard movie={shows} userPayload={userPayload} />
    </>
  );
}

export default Movies;
