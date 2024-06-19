import React, { FC } from "react";
import { AboutMovieProps } from "../types";
import "./AboutMovie.css";

const AboutMovie: FC<AboutMovieProps> = ({
  year,
  country,
  genres,
  description,
}) => {
  return (
    <div>
      <h2 className="aboutMovieTitle">О фильме</h2>
      <div className="row">
        <p>Год производства </p>
        <p>{year}</p>
      </div>
      <div className="row">
        <p>Страна </p>
        <p>{country}</p>
      </div>
      {genres && (
        <div className="row">
          <p>Жанры </p>
          <p>
            {genres.map((item, index) => (
              <span key={index}>
                {item.name}
                {index < genres.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      )}
      {description ? (
        <div className="descriptionMovie">{description}</div>
      ) : (
        <p>у этого фильма отсутствует описание</p>
      )}
    </div>
  );
};

export default AboutMovie;
