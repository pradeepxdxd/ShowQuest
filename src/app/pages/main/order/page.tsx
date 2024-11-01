import React from "react";
import Order from "@/app/views/order/Order";
import { getUserPayloadData } from "@/app/server/uid";

export default function page() {
  const uid = getUserPayloadData();
  return <Order uid={uid} />;
}

export const generateMetadata = () => {
  return {
    title:
      "Movie Tickets, Plays Tickets, Sports tickets, Concert Tickets on BookMyShow India",
    description:
      "Book advance movie tickets, cinema tickets, sports &amp; cricket tickets. Get movie show times, buy merchandise, concert tickets &amp; play tickets. Get discounts &amp; offers",
  };
};
