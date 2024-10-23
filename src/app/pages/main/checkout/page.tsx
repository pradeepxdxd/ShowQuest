import React from "react";
import CheckoutView from "@/app/views/checkout/Checkout";

export default function Checkout() {
  return <CheckoutView />;
}

export const generateMetadata = () => {
  return {
    title: "Showtimes in Indore & Online Ticket Booking",
    description:
      "Online movie ticket booking for a Action, Drama, Thriller film Jigra 2D with release date, show timings, cinemas & theaters in Indore on BookMyShow. Theatres with Social Distancing & Safety procedures available for Jigra. Look for the Safety Badge.",
  };
};
