import React, { FC, useCallback, useEffect } from "react";
import MovieCard from "./component/movieCard/MovieCard";
import "./Home.css";
import PaginationButtons from "./component/paginationButtons/PaginationButtons";
import { useMovies } from "./hook";
import { useFavorite } from "hooks/addToFavorite";
import Layout from "components/layout/Layout";

const Home: FC = () => {
  const {
    movies,
    moviesIsLoading,
    visiblePages,
    error,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
    totalPages,
  } = useMovies();

  const { addToFavorites, isFavorite, deleteFavoriteMovie } = useFavorite();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleClickFavoriteButton = useCallback(
    (movie) => {
      return () => {
        if (isFavorite(movie.id.toString())) {
          deleteFavoriteMovie(movie.id.toString());
        } else {
          addToFavorites(movie);
        }
      };
    },
    [addToFavorites, deleteFavoriteMovie, isFavorite]
  );

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Layout homeScreen>
      <div className="moviesContainer">
        {moviesIsLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="moviesContainer">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  isFavorite={isFavorite(movie.id.toString())}
                  clickOnFavoriteButton={handleClickFavoriteButton(movie)}
                  id={movie.id}
                  name={movie.name}
                  previewUrl={movie.poster?.previewUrl}
                  rating={movie.rating?.imdb}
                  year={movie.year}
                />
              ))}
            </div>

            <PaginationButtons
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              currentPage={currentPage}
              visiblePages={visiblePages}
              totalPages={totalPages}
              handlePageClick={handlePageClick}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export { Home };
