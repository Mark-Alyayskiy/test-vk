import React, { FC } from "react";
import "./Button.css";

type Props = {
  onClick?: () => void;
  name?: string;
  disable: boolean;
};

const Button: FC<Props> = ({ onClick, name, disable }) => {
  return (
    <button
      onClick={!disable ? onClick : undefined}
      className={disable ? "btnDisable" : "btn"}
      disabled={disable}
    >
      {name}
    </button>
  );
};

export default Button;
