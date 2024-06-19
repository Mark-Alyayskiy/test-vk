export type MovieCardProps = {
  id: number;
  name: string;
  previewUrl: string;
  year: number;
  rating: number;
  addToFavorites: () => void;
  isFavorite?: boolean;
};
