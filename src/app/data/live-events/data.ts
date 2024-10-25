import { StaticImageData } from "next/image";

import img1 from "@/app/assets/live-events/img1.jpg";
import img2 from "@/app/assets/live-events/img2.jpg";
import img3 from "@/app/assets/live-events/img3.jpg";
import img4 from "@/app/assets/live-events/img4.jpg";
import img5 from "@/app/assets/live-events/img5.jpg";
import img6 from "@/app/assets/live-events/img6.jpg";
import img7 from "@/app/assets/live-events/img7.jpg";
import img8 from "@/app/assets/live-events/img8.jpg";
import img9 from "@/app/assets/live-events/img9.jpg";
import img10 from "@/app/assets/live-events/img3.jpg";

export interface LiveEventImage {
  id: number;
  title: string;
  image: StaticImageData;
  rating: string;
  votes: string;
  genre: string;
  type: string;
}

export const liveEvent: LiveEventImage[] = [
  {
    image: img1,
    id: 1,
    title: "Amusement Park",
    genre: "Adventure",
    type: "live-event",
    rating: "8.7",
    votes: "123",
  },
  {
    image: img2,
    id: 2,
    title: "WorkShow",
    genre: "Workshop",
    type: "live-event",
    rating: "7.8",
    votes: "40",
  },
  {
    image: img3,
    id: 3,
    title: "Kids",
    genre: "kids",
    type: "live-event",
    rating: "8.8",
    votes: "150",
  },
  {
    image: img4,
    id: 4,
    title: "Comedy And Show",
    genre: "Comedy",
    type: "live-event",
    rating: "9.0",
    votes: "230",
  },
  {
    image: img5,
    id: 5,
    title: "Music Show",
    genre: "Music/Song/Dance",
    type: "live-event",
    rating: "9.2",
    votes: "250",
  },
  {
    image: img6,
    id: 6,
    title: "Upskills And Training",
    genre: "Learning/Training/Study",
    type: "live-event",
    rating: "8.2",
    votes: "60",
  },
  {
    image: img7,
    id: 7,
    title: "Interactive Games",
    genre: "Game/Entertainment",
    type: "live-event",
    rating: "9.5",
    votes: "550",
  },
  {
    image: img8,
    id: 8,
    title: "Art And Craft",
    genre: "Art/Craft",
    type: "live-event",
    rating: "7.2",
    votes: "15",
  },
  {
    image: img9,
    id: 9,
    title: "Theatre Show",
    genre: "Acting/Drama/Cinema",
    type: "live-event",
    rating: "9.2",
    votes: "430",
  },
  {
    image: img10,
    id: 10,
    title: "Adventure And Fun",
    genre: "Adventure/Fun",
    type: "live-event",
    rating: "8.5",
    votes: "70",
  },
];
