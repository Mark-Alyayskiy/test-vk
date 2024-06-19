import React, { FC } from "react";

type Props = {
  height?: string;
  width?: string;
  color?: string;
};

export const CloseIcon: FC<Props> = ({ height, width, color }) => {
  return (
    <svg
      width={width && width ? width : "33"}
      height={height && height ? height : "33"}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5 1L1 31.5"
        stroke={color && color ? color : "#FF7354"}
        strokeWidth="2"
      />
      <path
        d="M1 1L31.5 31.5"
        stroke={color && color ? color : "#FF7354"}
        strokeWidth="2"
      />
    </svg>
  );
};

export default CloseIcon;
