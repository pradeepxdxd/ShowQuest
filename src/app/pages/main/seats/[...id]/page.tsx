"use server";
import SeatsView from "@/app/views/seats/Seats";
const Seats = () => {
  return <SeatsView />;
};

export const generateMetadata = () => {
  return {
    title: "Online movie ticket booking for a Action, Adventure, Sci-Fi film",
    description:
      "Online movie ticket booking for a Action, Adventure, Sci-Fi film Venom: The Last Dance (3D) (Hindi) 3D with release date, show timings, cinemas & theaters in Indore on ShowQuest. Theatres with Social Distancing & Safety procedures available for Venom: The Last Dance (3D) (Hindi). Look for the Safety Badge.",
  };
};

export default Seats;
