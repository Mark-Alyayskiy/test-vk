import React, { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Icon } from "uikit/components/icon";

type HeaderProps = {
  toggleModal: () => void;
  homeScreen?: boolean;
};

const Header: FC<HeaderProps> = ({ toggleModal, homeScreen }) => {
  return (
    <div className="headerContainer">
      <Link className="clearLink" to="/">
        <Icon name="logoIcon" height="60px" width="60px" />
        <p className="name">Movie поиск</p>
      </Link>
      {homeScreen && (
        <button className="headerButton" onClick={toggleModal}>
          Фильтры
        </button>
      )}

      <Link to="/favorite">
        <button className="headerButton">Избранная фильмография</button>
      </Link>
    </div>
  );
};

export default Header;
