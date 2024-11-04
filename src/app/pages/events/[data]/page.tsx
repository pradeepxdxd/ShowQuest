import React from "react";
import Event from "@/app/views/events/Event";

export default function event() {
  return <Event />;
}

export const generateMetadata = () => {
  return {
    title: "Top Upcoming Events in Pune | Best Live Events in Pune - ShowQuest",
    description:
      "Book tickets for best upcoming events in Pune. Explore music, comedy, workshops, online events near you in Pune on ShowQuest.",
  };
};
