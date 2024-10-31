"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMovies } from "@/service/api/api";
import { Movie } from "@/app/types/movie.type";
import ShowDetails from "@/app/views/show-details/ShowDetails";

export default function MovieData() {
  const [data, setData] = useState<Movie | null>(null);
  const router = useParams();
  useEffect(() => {
    const movieId = Array.isArray(router.data) ? router.data[0] : router.data;
    if (movieId) {
      const data = getMovies(parseInt(movieId));
      setData(data);
    }
  }, [router.data]);
  return data ? <ShowDetails data={data} /> : <h3>Movie Not Found</h3>;
}
