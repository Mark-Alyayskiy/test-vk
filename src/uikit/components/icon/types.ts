export type IconName = "closeIcon" | "starIcon" | "logoIcon";

export type UseIconComponentArgs = {
  name: IconName;
};
export type IconProps = {
  name: IconName;
  color?: string;
  width?: string;
  height?: string;
};
