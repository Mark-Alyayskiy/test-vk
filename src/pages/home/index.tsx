import React, { FC, useEffect, useState } from "react";
import MovieCard from "./component/movieCard/MovieCard";
import "./Home.css";
import Header from "components/header/Header";
import PaginationButtons from "./component/paginationButtons/PaginationButtons";
import { useMovies } from "./hook";
import FilterModal from "uikit/components/modal/filterModal/FilterModal";
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

  const { addToFavorites, isFavorite } = useFavorite();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Layout>
      <div className="moviesContainer">
        {moviesIsLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <div className="moviesContainer">
              {movies.map((movie) => (
                <MovieCard
                  isFavorite={isFavorite(movie.id.toString())}
                  addToFavorites={() => addToFavorites(movie)}
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
