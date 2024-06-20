import React, { FC, useState } from "react";
import "./Layout.css";
import { LayoutProps } from "./types";
import Header from "components/header/Header";
import FilterModal from "uikit/components/modal/filterModal/FilterModal";

const Layout: FC<LayoutProps> = ({ children, homeScreen }) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const toggleModal = () => {
    setModalIsShown((prev) => !prev);
  };

  const toggleFilterModal = () => {
    setModalIsShown((prev) => !prev);
  };
  return (
    <>
      <Header homeScreen={homeScreen} toggleModal={toggleModal} />
      <div className="layoutContainer">
        <FilterModal
          toggleModal={toggleModal}
          toggleFilterModal={toggleFilterModal}
          isShown={modalIsShown}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
