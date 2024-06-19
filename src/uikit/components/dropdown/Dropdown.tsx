import React, { useState } from "react";
import "./Dropdown.css";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onChange: (selected: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`}>
      <button onClick={handleButtonClick}>
        {selectedOption || placeholder}
      </button>
      <div className="dropdown-content">
        {options.map((option) => (
          <div
            key={option}
            className={`option ${option === selectedOption ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
