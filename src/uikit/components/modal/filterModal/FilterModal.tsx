import React, { FC, useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { Icon } from "uikit/components/icon";
import "./FilterModal.css";
import RadioGroup from "uikit/components/radioGroup/RadioGroup";
import { buttons, ratingOptions } from "./constants";
import { GlobalContext } from "context/GlobalContext";
import { Filters, Props } from "./types";
import Input from "uikit/components/input/Input";
import InfoBlock from "./infoBlock/infoBlock";
import Button from "uikit/components/button/Button";
import Dropdown from "uikit/components/dropdown/Dropdown";

const FilterModal: FC<Props> = ({
  toggleModal,
  toggleFilterModal,
  customContainerStyles,
  isShown,
}) => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const { globalData, setGlobalData } = useContext(GlobalContext);
  const [filters, setFilters] = useState<Filters>({
    genres: [],
    rating: {
      start: 0,
      end: 10,
    },
    year: {
      start: 1874,
      end: 2050,
    },
  });

  const [selectedRatingStart, setSelectedRatingStart] = useState<string>("");
  const [selectedRatingEnd, setSelectedRatingEnd] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Filters,
    type: string
  ) => {
    let value = e.target.value ? parseInt(e.target.value) : 0;
    if (field === "year") {
      value = Math.max(1874, Math.min(2050, value));
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: {
        ...prevFilters[field],
        [type]: value,
      },
    }));
  };

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      genres: selectedButtons,
    }));
  }, [selectedButtons]);

  const onRatingStartChange = (selected: string) => {
    setSelectedRatingStart(selected);
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: {
        ...prevFilters.rating,
        start: parseInt(selected, 10),
      },
    }));
  };

  const onRatingEndChange = (selected: string) => {
    setSelectedRatingEnd(selected);
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: {
        ...prevFilters.rating,
        end: parseInt(selected, 10),
      },
    }));
  };

  const isFiltersEmpty = () => {
    return (
      selectedButtons.length === 0 &&
      filters.rating.start === 0 &&
      filters.rating.end === 10 &&
      filters.year.start === 1874 &&
      filters.year.end === 2050
    );
  };

  const applyFilters = () => {
    setGlobalData({
      ...globalData,
      filters: filters,
    });
    toggleModal();
  };

  const clearFilters = () => {
    setSelectedButtons([]);
    setSelectedRatingStart("");
    setSelectedRatingEnd("");
    setFilters({
      genres: [],
      rating: {
        start: 0,
        end: 10,
      },
      year: {
        start: 1874,
        end: 2050,
      },
    });
  };

  return (
    <Modal
      toggleModal={toggleModal}
      isShown={isShown}
      customContainerStyles={customContainerStyles}
    >
      <header className="header">
        <p className="title">Фильтры</p>
        <button className="closeButton" onClick={toggleFilterModal}>
          <Icon name="closeIcon" />
        </button>
      </header>

      <RadioGroup
        matrix
        buttons={buttons}
        setSelectedButtons={setSelectedButtons}
        selectedButtons={selectedButtons}
      />
      <div className="groupsOfInputs">
        <div className="InputsBlock">
          <Input
            placeholder="Год выпуска от"
            type="number"
            onChange={(e) => handleInputChange(e, "year", "start")}
            value={filters.year.start}
          />
          <Input
            placeholder="Год выпуска до"
            type="number"
            onChange={(e) => handleInputChange(e, "year", "end")}
            value={filters.year.end}
          />
        </div>
        <div className="InputsBlock">
          <Dropdown
            options={ratingOptions}
            selectedOption={selectedRatingStart}
            onChange={onRatingStartChange}
            placeholder="Рейтинг от"
          />
          <Dropdown
            options={ratingOptions}
            selectedOption={selectedRatingEnd}
            onChange={onRatingEndChange}
            placeholder="Рейтинг до"
          />
        </div>
      </div>
      <InfoBlock filters={filters} />
      <div className="buttonGroup">
        <Button
          disable={isFiltersEmpty()}
          onClick={applyFilters}
          name="ПРИНЯТЬ"
        />
        <Button
          disable={isFiltersEmpty()}
          onClick={clearFilters}
          name="ОЧИСТИТЬ"
        />
      </div>
    </Modal>
  );
};

export default FilterModal;
