import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { getMovieById } from "api/movies";
import { Movie } from "types/movie";
import { useParams } from "react-router-dom";
import MovieImagePreview from "uikit/components/movieImagePreview/MovieImagePreview";
import "./MovieDetail.css";
import AboutMovie from "./aboutMovie/AboutMovie";
import Layout from "components/layout/Layout";
import { Icon } from "uikit/components/icon";
import { useFavorite } from "hooks/addToFavorite";

const MovieDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie>();
  const [moviesIsLoading, setMoviesIsLoading] = useState(false);
  const { addToFavorites, isFavorite } = useFavorite();

  const fetchMovie = async () => {
    setMoviesIsLoading(true);
    try {
      if (id) {
        const res = await getMovieById(id);
        setMovie(res);
      }
    } catch (e) {
      console.log("error_get_single_movie", e);
    } finally {
      setMoviesIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const ratingColor = useMemo(() => {
    if (movie && movie.rating && movie.rating.imdb) {
      return movie.rating.imdb > 7 ? "goodRatingMovie" : "badRatingMovie";
    }
  }, [movie]);

  const handleAddToFavorites = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      addToFavorites(movie);
    },
    [addToFavorites, movie]
  );

  return (
    <Layout>
      <div className="movieDetailContainer">
        {moviesIsLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="mainWrapper">
            {movie && (
              <div className="mainWrapper">
                <MovieImagePreview
                  url={movie.poster?.previewUrl}
                  altName={movie.name}
                />

                <div>
                  <p className="titleMovie">{movie.name}</p>
                  <button
                    className="favoriteMovieButton"
                    onClick={handleAddToFavorites}
                  >
                    <Icon
                      name="starIcon"
                      width="35px"
                      height="35px"
                      color={
                        isFavorite(movie.id.toString()) ? "yellow" : "none"
                      }
                    />
                  </button>
                  {movie.rating?.imdb && (
                    <p className={ratingColor}>{movie.rating?.imdb}</p>
                  )}

                  <AboutMovie
                    description={movie?.description}
                    genres={movie?.genres}
                    country={movie?.countries[0].name}
                    year={movie?.year}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MovieDetail;
