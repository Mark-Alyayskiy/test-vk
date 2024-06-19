import React, { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Icon } from "uikit/components/icon";

type HeaderProps = {
  toggleModal: () => void;
};

const Header: FC<HeaderProps> = ({ toggleModal }) => {
  return (
    <div className="headerContainer">
      <Link className="clearLink" to="/">
        <Icon name="logoIcon" height="60px" width="60px" />
        <p className="name">Movie поиск</p>
      </Link>

      <button onClick={toggleModal}>Modal</button>
      <Link to="/favorite">
        <button onClick={toggleModal}>Favorite</button>
      </Link>
    </div>
  );
};

export default Header;
