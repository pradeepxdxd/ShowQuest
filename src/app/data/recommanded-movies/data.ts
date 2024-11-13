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

export const movies: Movie[] = [];

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
