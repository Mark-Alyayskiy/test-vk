import { useMemo } from "react";

import * as I from "./icons";
import { UseIconComponentArgs } from "./types";

export const useIconComponent = ({ name }: UseIconComponentArgs) => {
  return useMemo(() => {
    switch (name) {
      case "closeIcon":
        return I.CloseIcon;
      case "starIcon":
        return I.StarIcon;
      case "logoIcon":
        return I.LogoIcon;
      case "trashIcon":
        return I.TrashIcon;

      default:
        return null;
    }
  }, [name]);
};
