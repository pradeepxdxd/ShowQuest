import { StaticImageData } from "next/image";

export interface Movie {
  id: number;
  title: string;
  image: StaticImageData;
  rating: string;
  votes: string;
  genre: string;
}

export interface MovieCardProps {
  movie: Movie[];
}

export interface MovieCard {
  card: Movie;
}
