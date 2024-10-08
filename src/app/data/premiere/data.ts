import img1 from "@/app/assets/premiere/img1.jpg";
import img2 from "@/app/assets/premiere/img2.jpg";
import img3 from "@/app/assets/premiere/img3.jpg";
import img4 from "@/app/assets/premiere/img4.jpg";
import img5 from "@/app/assets/premiere/img5.jpg";
import { StaticImageData } from "next/image";

export interface Premiere {
  title: string;
  image: StaticImageData;
  language: string;
  id: number;
  rating: string;
  votes: string;
  genre: string;
}

export const premiereData: Premiere[] = [
  {
    id: 1,
    genre: "Politics/Drama/Action/Romance",
    rating: "7.2",
    votes: "120",
    title: "The Layoff Parties",
    image: img1,
    language: "Hindi",
  },
  {
    id: 2,
    genre: "Action/Romance/Triller",
    rating: "9.7",
    votes: "700",
    title: "Bang Bang!",
    image: img2,
    language: "Hindi",
  },
  {
    id: 3,
    genre: "Drama/Ancient/Action/War",
    rating: "5.5",
    votes: "300",
    title: "Hoy Maharaja",
    image: img3,
    language: "Marathi",
  },
  {
    id: 4,
    genre: "Drama/Comedy",
    rating: "8.6",
    votes: "300",
    title: "Shyamchi Aai",
    image: img4,
    language: "Marathi",
  },
  {
    id: 5,
    genre: "Action/Drama",
    rating: "8.8",
    votes: "500",
    title: "Sidone in Japan",
    image: img5,
    language: "French",
  },
];
