import React, { FC } from "react";
import "./InfoBlock.css";

type InfoBlockProps = {
  genres: string[];
};

const InfoBlock: FC<InfoBlockProps> = ({ genres }) => {
  return (
    <div className="infoBlock">
      {genres.length > 0 && (
        <div className="infoBlockRow">
          <p>Вы ищете фильмы в жанре :</p>
          <div className="infoBlockRowGenres">
            {genres.map((item) => (
              <p className="genre">{item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
