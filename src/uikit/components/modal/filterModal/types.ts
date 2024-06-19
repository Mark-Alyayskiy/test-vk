import { CSSProperties } from "react";

export type Props = {
  toggleModal: () => void;
  toggleFilterModal: () => void;
  customContainerStyles?: CSSProperties;
  isShown: boolean;
};

export type Filters = {
  genres: string[];
  rating: {
    start: number;
    end: number;
  };
  year: {
    start: number;
    end: number;
  };
};

export type Rating = {
  rating: {
    start: number;
    end: number;
  };
};
