import axios from "axios";
import { Filters } from "uikit/components/modal/filterModal/types";
const X_API_KEY = process.env.REACT_APP_X_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

type getMoviesProps = {
  page: number;
  filters?: Filters;
};

export const getMovies = async ({ page, filters }: getMoviesProps) => {
  const headers = {
    "X-API-KEY": "HKYFWK2-YH34679-NDCRPBA-DWNJH3E",
    "Content-Type": "application/json",
  };

  const params: Record<string, string> = {
    limit: String(50),
    page: String(page),
  };

  if (filters?.rating) {
    params["rating.imdb"] = `${filters.rating.start}-${filters.rating.end}`;
  }

  if (filters?.year) {
    params["year"] = `${filters.year.start}-${filters.year.end}`;
  }

  let genreParams = "";
  if (filters?.genres?.length) {
    genreParams = filters.genres
      .map((genre) => `genres.name=%2B${encodeURIComponent(genre)}`)
      .join("&");
  }

  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}?${queryString}${
    genreParams ? `&${genreParams}` : ""
  }`;

  const config = {
    headers,
  };

  const res = await axios.get(url, config);
  return res.data;
};

export const getMovieById = async (id: string) => {
  const headers = {
    "X-API-KEY": "HKYFWK2-YH34679-NDCRPBA-DWNJH3E",
    "Content-Type": "application/json",
  };

  const config = {
    headers: headers,
  };

  const res = await axios.get(`${BASE_URL}/${id}`, config);
  return res.data;
};
