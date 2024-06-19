interface Country {
  name: string;
}

export interface Genre {
  name: string;
}

interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface ReleaseYear {
  start: number;
  end: number;
}

interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Movie {
  id: number;
  name: string;
  ageRating: number | null;
  alternativeName: string;
  countries: Country[];
  description: string | null;
  genres: Genre[];
  isSeries: boolean;
  movieLength: number | null;
  poster: {
    previewUrl: string;
    url: string;
  };
  rating: Rating;
  ratingMpaa: string | null;
  releaseYears: ReleaseYear[];
  seriesLength: number | null;
  shortDescription: string | null;
  status: string;
  ticketsOnSale: boolean;
  top10: number | null;
  top250: number | null;
  totalSeriesLength: number;
  type: string;
  typeNumber: number;
  votes: Votes;
  year: number;
}
