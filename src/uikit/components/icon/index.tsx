import React, { memo } from "react";
import { IconProps } from "./types";
import { useIconComponent } from "./hook";

export const Icon = memo(
  ({ name, width = "30px", height = "30px", color }: IconProps) => {
    const IconComponent = useIconComponent({ name });

    if (!IconComponent) return null;

    return (
      <IconComponent
        color={color ? color : "#000"}
        width={width}
        height={height}
      />
    );
  }
);

export * from "./types";
