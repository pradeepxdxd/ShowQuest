"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import ShowDetails from "@/app/views/show-details/ShowDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { clearShow, getShowByIdData } from "@/app/store/show/show.slice";
import Loading from "@/app/ui/loading";

export default function MovieData() {
  const { data } = useParams();
  const { show, loading } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getShowByIdData(data as string));
    return () => {
      dispatch(clearShow());
    };
  }, [data, dispatch]);

  if (loading) return <Loading />;

  return show ? <ShowDetails data={show} /> : <h3>Movie Not Found</h3>;
}
