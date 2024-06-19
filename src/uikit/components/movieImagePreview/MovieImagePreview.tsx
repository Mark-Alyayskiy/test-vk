import React, { FC } from "react";
import "./MovieImagePreview.css";

type MovieImagePreviewProps = {
  url: string;
  altName: string;
};

const MovieImagePreview: FC<MovieImagePreviewProps> = ({ url, altName }) => {
  return (
    <div className={url ? "imageContainer" : "imageNone"}>
      {url ? <img src={url} alt={altName} /> : <p>картинки нет</p>}
    </div>
  );
};

export default MovieImagePreview;
