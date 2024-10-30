import { getUserPayloadData } from "@/app/server/uid";
import Edit from "@/app/views/profile/edit/Edit";
import React from "react";

export default function page() {
  const { id } = getUserPayloadData();
  return <Edit id={id} />;
}

export const generateMetadata = () => {
  return {
    title: "Movie Tickets, Plays, Sports, Events &amp; Cinemas",
    description:
      "BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Pune. Also features promotional offers, coupons and mobile app.",
  };
};
