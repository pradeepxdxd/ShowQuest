import React from "react";
import LoginView from "@/app/views/login/page";

export default function Login() {
  return <LoginView />;
}

export const generateMetadata = () => {
  return {
    title: "Login - Create You Account",
    description:
      "Online movie ticket bookings for the Bollywood, Hollywood, Tamil, Telugu and other regional films showing near you in Pune. Check out the List of latest movies running in nearby theatres and multiplexes in Pune, for you to watch this weekend on BookMyShow. You can use after login",
  };
};
