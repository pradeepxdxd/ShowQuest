import React from "react";
import CheckoutView from "@/app/views/checkout/Checkout";
import { headers } from "next/headers";

const getUserPayloadData = () => {
  const reqHeaders = headers();
  const userPayloadHeader = reqHeaders.get("x-user-payload");

  let userPayload = null;
  if (typeof userPayloadHeader === "string") {
    userPayload = JSON.parse(userPayloadHeader);
  }

  return { email: userPayload.email, name: userPayload.name };
};

const Checkout = () => {
  const userPayload = getUserPayloadData();
  return <CheckoutView userPayload={userPayload} />;
};

export const generateMetadata = () => {
  return {
    title: "Showtimes in Indore & Online Ticket Booking",
    description:
      "Online movie ticket booking for a Action, Drama, Thriller film Jigra 2D with release date, show timings, cinemas & theaters in Indore on BookMyShow. Theatres with Social Distancing & Safety procedures available for Jigra. Look for the Safety Badge.",
  };
};

export default Checkout;
