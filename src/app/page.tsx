import { Metadata } from "next";
import Home from "./pages/home/page";

export default function page() {
  return <Home />;
}

export const metadata: Metadata = {
  title: "Movie Tickets, Plays, Sports, Events & Cinemas",
  description:
    "BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events near Pune. Also features promotional offers, coupons and mobile app.",
};