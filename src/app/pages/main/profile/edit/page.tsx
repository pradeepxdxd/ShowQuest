import { getUserPayloadData } from "@/app/server/uid";
import Edit from "@/app/views/profile/edit/Edit";
import React from "react";

export default function Page() {
  const userPayload = getUserPayloadData();

  if (!userPayload) {
    // Handle the case where userPayload is null, e.g., redirect or return a placeholder
    return <div>User not found</div>; // or handle as per your logic
  }

  return <Edit id={userPayload.id} />;
}

export const generateMetadata = () => {
  return {
    title: "Movie Tickets, Plays, Sports, Events & Cinemas",
    description:
      "ShowQuest offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Pune. Also features promotional offers, coupons and mobile app.",
  };
};
