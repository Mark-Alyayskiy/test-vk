import React, { FC } from "react";
import "./InfoBlock.css";
import { Filters } from "../types";

type InfoBlockProps = {
  filters: Filters;
};

const InfoBlock: FC<InfoBlockProps> = ({ filters }) => {
  return (
    <div className="infoBlock">
      {filters.genres.length > 0 && (
        <div className="infoBlockRow">
          <p>Вы ищете фильмы в жанре :</p>
          <div className="infoBlockRowGenres">
            {filters.genres.map((item) => (
              <p className="genre">{item}</p>
            ))}
          </div>
        </div>
      )}
      {filters.rating && (
        <div className="infoBlockRow">
          <p>С рейтингом :</p>
          <div className="infoBlockRowGenres">
            <p className="genre">{filters.rating.start}</p>
          </div>
          <p>до:</p>
          <div className="infoBlockRowGenres">
            <p className="genre">{filters.rating.end}</p>
          </div>
        </div>
      )}
      {filters.year && (
        <div className="infoBlockRow">
          <p>Год выпуска от</p>
          <div className="infoBlockRowGenres">
            <p className="genre">{filters.year.start}</p>
          </div>
          <p> до</p>
          <div className="infoBlockRowGenres">
            <p className="genre">{filters.year.end}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
