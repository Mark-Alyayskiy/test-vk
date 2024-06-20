import { useFavorite } from "hooks/addToFavorite";
import React, { useEffect, useState } from "react";
import { Movie } from "types/movie";
import MovieCard from "../../pages/home/component/movieCard/MovieCard";
import "./FavoriteMovies.css";
import Layout from "components/layout/Layout";

const FavoriteMovies = () => {
  const { deleteFavoriteMovie, clearLocalStorage, getFavorites, isFavorite } =
    useFavorite();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(getFavorites());
  }, []);

  const handleDelete = (id: string) => {
    deleteFavoriteMovie(id);
    setMovies(getFavorites());
  };

  return (
    <Layout>
      <div>
        {movies.length > 0 && (
          <button
            onClick={() => {
              clearLocalStorage();
              setMovies([]);
            }}
          >
            Удалить коллекцию
          </button>
        )}

        <div className="favoritesMoviesContainer">
          {movies.length === 0 ? (
            <p className="text">В вашей коллекции пока нет фильмов</p>
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                isFavorite={isFavorite(movie.id.toString())}
                clickOnFavoriteButton={() => handleDelete(movie.id.toString())}
                id={movie.id}
                name={movie.name}
                previewUrl={movie.poster?.previewUrl}
                rating={movie.rating?.imdb}
                year={movie.year}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FavoriteMovies;
