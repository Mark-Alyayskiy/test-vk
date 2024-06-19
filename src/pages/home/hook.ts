import { getMovies } from "api/movies";
import { GlobalContext } from "context/GlobalContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { Movie } from "types/movie";
import { Filters } from "uikit/components/modal/filterModal/types";

const MAX_VISIBLE_PAGES = 10;

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesIsLoading, setMoviesIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const [error, setError] = useState();
  const { globalData } = useContext(GlobalContext);

  const fetchMovies = useCallback(async (page: number, filters?: Filters) => {
    try {
      const res = await getMovies({ page, filters });
      setMovies(res.docs);
      setTotalPages(res.pages);
      setMoviesIsLoading(false);
    } catch (e: any) {
      console.log("error_get_movies", e);
      setError(e);
      setMoviesIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies(currentPage, globalData.filters);
  }, [fetchMovies, currentPage, globalData.filters]);

  useEffect(() => {
    const calculateVisiblePages = () => {
      const half = Math.floor(MAX_VISIBLE_PAGES / 2);
      let start = currentPage - half;
      let end = currentPage + half;

      if (start < 1) {
        start = 1;
        end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);
      }

      if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
      }

      const pages: number[] = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    };

    setVisiblePages(calculateVisiblePages());
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return {
    movies,
    moviesIsLoading,
    visiblePages,
    error,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
    totalPages,
  };
};
