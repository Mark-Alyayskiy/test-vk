import React, { FC } from "react";
import "./RadioGroup.css";

type RadioGroupProps = {
  buttons: string[];
  matrix?: boolean;
  selectedButtons: string[];
  setSelectedButtons: any;
};

const RadioGroup: FC<RadioGroupProps> = ({
  buttons,
  matrix,
  selectedButtons,
  setSelectedButtons,
}) => {
  const toggleButton = (button: string) => {
    const selectedIndex = selectedButtons.indexOf(button);
    if (selectedIndex === -1) {
      setSelectedButtons((prevButtons) => [...prevButtons, button]);
    } else {
      setSelectedButtons(selectedButtons.filter((item) => item !== button));
    }
  };

  return (
    <div className={matrix ? "wrap" : "container"}>
      {buttons.map((button) => {
        const isSelected = selectedButtons.includes(button);
        return (
          <RadioButton
            label={button}
            key={button}
            selected={isSelected}
            onClick={() => toggleButton(button)}
          />
        );
      })}
    </div>
  );
};

type RadioButtonProps = {
  label: string;
  selected?: boolean;
  onClick: () => void;
};

const RadioButton: FC<RadioButtonProps> = ({ label, onClick, selected }) => {
  const styleButton = () => {
    if (selected) {
      return "buttonActive";
    }
    return "button";
  };

  return (
    <button type="button" onClick={onClick} className={styleButton()}>
      <input
        className="radioInput"
        type="checkbox"
        checked={selected}
        readOnly
      />
      {label}
    </button>
  );
};

export default RadioGroup;
