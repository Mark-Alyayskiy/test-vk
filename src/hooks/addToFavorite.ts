import { useState } from "react";
import { Movie } from "types/movie";

export const useFavorite = () => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  const updateFavorites = (newFavorites: Movie[]) => {
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const addToFavorites = (movie: Movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      const newFavorites = [...favorites, movie];
      updateFavorites(newFavorites);
    }
  };

  const deleteFavoriteMovie = (id: string) => {
    const newFavorites = favorites.filter((fav) => fav.id !== +id);
    updateFavorites(newFavorites);
  };

  const getFavorites = (): Movie[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setFavorites([]);
  };

  const isFavorite = (id: string): boolean => {
    return favorites.some((movie) => movie.id === +id);
  };

  return {
    favorites,
    addToFavorites,
    getFavorites,
    deleteFavoriteMovie,
    clearLocalStorage,
    isFavorite,
  };
};
