import { movies, Movie } from "@/app/data/recommanded-movies/data";
import { LiveEventImage, liveEvent } from "@/app/data/live-events/data";
import { premiereData, Premiere } from "@/app/data/premiere/data";
import { theaterData } from "@/app/data/theater/data";

export interface MovieApi {
  getMovies: (id: number) => Movie;
  getLiveEvent: (id: number) => LiveEventImage;
  getPremiereMovies: (id: number) => Premiere;
}

export const getMovies = (id: number) => {
  return movies.filter((movie) => movie.id === id)[0];
};

export const getLiveEvent = (id: number) => {
  return liveEvent.filter((event) => event.id === id)[0];
};

export const getPremiereMovies = (id: number) => {
  return premiereData.filter((pre) => pre.id === id)[0];
};

export const getSeatDetails = (id: number) => {
  return theaterData.filter((the) => the.id === id)[0];
};
