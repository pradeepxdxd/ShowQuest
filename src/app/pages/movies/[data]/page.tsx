import React from "react";
import Movies from "@/app/views/movies/Movies";

export default function page() {
  return <Movies />;
}

export const generateMetadata = () => ({
  title: "Movie | Reviews, Cast &amp; Release Date in indore-  ShowQuest",
  discription:
    "Action Drama Thriller released in Hindi Telugu language in theatre near you in indore. Know about Film reviews, lead cast &amp; crew,  photos &amp; video gallery on ShowQuest.",
});
