"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPremiereMovies } from "@/service/api/api";
import { Premiere } from "@/app/data/premiere/data";
import ShowDetails from "@/app/views/show-details/ShowDetails";

export default function PremierePage() {
  const [data, setData] = useState<Premiere | null>(null);
  const router = useParams();
  useEffect(() => {
    const movieId = Array.isArray(router.data) ? router.data[0] : router.data;
    if (movieId) {
      const data = getPremiereMovies(parseInt(movieId));
      setData(data);
    }
  }, [router.data]);
  return data ? <ShowDetails data={data} /> : <h3>Premiere Movie Not Found</h3>;
}
