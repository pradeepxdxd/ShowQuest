"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SimpleBackdrop from "../components/backdrop/SimpleBackdrop";

export default function Homebackdrop() {
  const { loading } = useSelector((state: RootState) => state.auth);
  return <SimpleBackdrop open={loading} />;
}
