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

export interface MovieCardProps {
  movie: Movie[];
}

export interface MovieCardProp {
  card: Movie;
}
