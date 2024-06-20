export type MovieCardProps = {
  id: number;
  name: string;
  previewUrl: string;
  year: number;
  rating: number;
  clickOnFavoriteButton: () => void;
  isFavorite?: boolean;
};
