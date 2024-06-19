import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  onChange?: any;
  placeholder: string;
  type?: any;
  maxLength?: number;
  value: any;
};

const Input: FC<InputProps> = ({
  onChange,
  placeholder,
  type,
  maxLength,
  value,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number" && e.key && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <div className="container">
      <input
        onKeyPress={handleKeyPress}
        pattern="[0-9]*"
        maxLength={maxLength}
        className="input"
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
