import img2 from "@/app/assets/recommended-movies/img2.jpg";
import img3 from "@/app/assets/recommended-movies/img3.jpg";
import img4 from "@/app/assets/recommended-movies/img4.jpg";
import img5 from "@/app/assets/recommended-movies/img5.jpg";
import img6 from "@/app/assets/recommended-movies/img6.jpg";
import img7 from "@/app/assets/recommended-movies/img7.jpg";
import img8 from "@/app/assets/recommended-movies/img8.jpg";
import img9 from "@/app/assets/recommended-movies/img9.jpg";
import img10 from "@/app/assets/recommended-movies/img10.jpg";

import { StaticImageData } from "next/image";

export interface Movie {
  id: number;
  title: string;
  image: StaticImageData;
  rating: string;
  votes: string;
  genre: string;
  type: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Devara - Part 1",
    image: img10,
    rating: "8.2",
    votes: "256.3K",
    genre: "Action/Drama/Thriller",
    type: "movie",
  },
  {
    id: 2,
    title: "Dharmaveer: Mukkam Post Thane 2",
    image: img2,
    rating: "8.2",
    votes: "26.2K",
    genre: "Biography/Drama",
    type: "movie",
  },
  {
    id: 3,
    title: "Joker: Folie a Deux",
    image: img3,
    rating: "4.6",
    votes: "8.9K",
    genre: "Drama/Suspense/Thriller",
    type: "movie",
  },
  {
    id: 4,
    title: "Navra Maza Navsacha 2",
    image: img4,
    rating: "7.9",
    votes: "20.5K",
    genre: "Comedy/Drama/Family",
    type: "movie",
  },
  {
    id: 5,
    title: "Stree 2",
    image: img5,
    rating: "8.9",
    votes: "409.3K",
    genre: "Comedy/Horror",
    type: "movie",
  },
  {
    id: 6,
    title: "Ek Daav Bhootacha",
    image: img6,
    rating: "7.3",
    votes: "Early Ratings",
    genre: "Comedy/Fantasy",
    type: "movie",
  },
  {
    id: 7,
    title: "White Bird",
    image: img7,
    rating: "8.7",
    votes: "175",
    genre: "Biography/Drama/Family/Historical",
    type: "movie",
  },
  {
    id: 8,
    title: "Bunny And Family",
    image: img8,
    rating: "8.9",
    votes: "9.2k",
    genre: "Comedy/Drama/Family",
    type: "movie",
  },
  {
    id: 9,
    title: "Meiyazhagan",
    image: img9,
    rating: "8.2",
    votes: "20.5k",
    genre: "Comedy/Drama",
    type: "movie",
  },
  {
    id: 10,
    title: "The Buchinghum Murders",
    image: img10,
    rating: "6.6",
    votes: "23.1k",
    genre: "Crime/Mystery/thriller",
    type: "movie",
  },
];

export const genres: string[] = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "War",
  "Western",
  // Add more genres as needed
];
