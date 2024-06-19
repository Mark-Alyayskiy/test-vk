import { Genre } from "types/movie";

export type AboutMovieProps = {
  year: number;
  country: string;
  genres: Genre[];
  description: string;
};
