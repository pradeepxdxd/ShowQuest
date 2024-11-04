"use client";
import React, { useEffect } from "react";
import CustomMovieCard from "@/app/components/cards/movies/CustomCardMovies";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { clearShows, getShowByTypeData } from "@/app/store/show/show.slice";

function Movies({ userPayload, showType }) {
  const { shows } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getShowByTypeData(showType));
    return () => {
      dispatch(clearShows());
    };
  }, [dispatch, showType]);

  return (
    <>
      <CustomMovieCard movie={shows} userPayload={userPayload} showType={showType} />
    </>
  );
}

export default Movies;
