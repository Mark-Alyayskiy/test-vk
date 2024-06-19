import React, { FC, useCallback, useMemo } from "react";
import { MovieCardProps } from "./types";
import MovieImagePreview from "uikit/components/movieImagePreview/MovieImagePreview";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { Icon } from "uikit/components/icon";

const MovieCard: FC<MovieCardProps> = ({
  id,
  name,
  previewUrl,
  rating,
  year,
  addToFavorites,
  isFavorite,
}) => {
  const ratingStyle = useMemo(
    () => (rating > 7 ? "ratingGood" : "ratingBad"),
    [rating]
  );

  const handleAddToFavorites = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      addToFavorites();
    },
    [addToFavorites]
  );

  return (
    <Link key={id} to={`/movies/${id}`} className="movieCardLink">
      <div className="cardWrapper">
        <button className="favoriteButton" onClick={handleAddToFavorites}>
          <Icon
            name="starIcon"
            width="35px"
            height="35px"
            color={isFavorite ? "yellow" : "none"}
          />
        </button>
        <div className={ratingStyle}>{rating}</div>
        <MovieImagePreview url={previewUrl} altName={name} />
        <section className="textBlock">
          <p className="name">{name}</p>
          <p className="name">{year}</p>
        </section>
      </div>
    </Link>
  );
};

export default MovieCard;
