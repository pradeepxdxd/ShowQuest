import AddMovieView from "@/app/views/admin/movies/AddMovieView";
import React from "react";

export default function AddMovies() {
  return <AddMovieView />;
}

export const generateMetadata = () => {
  return {
    title: "Pune Movie Tickets Online Booking & Showtimes near you - ShowQuest",
    description:
      "Online movie ticket bookings for the Bollywood, Hollywood, Tamil, Telugu and other regional films showing near you in Pune. Check out the List of latest movies running in nearby theatres and multiplexes in Pune, for you to watch this weekend on ShowQuest.",
  };
};
