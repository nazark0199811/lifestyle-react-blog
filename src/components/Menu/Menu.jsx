import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/img/header_logo.png';

import "./menu.css";

export const Menu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const activeClass = isOpened ? 'active' : '';

  return (
    <div className="header-menu">
      <div className="header-menu__container">
        <div className="header-logo">
          <Link to="/"> <img className="header-logo__accent" src={logo} alt="logo" /> </Link>
        </div>
        <nav className="header-navbar">
          <div className={`header-navbar__btn ${activeClass}`} onClick={() => setIsOpened(!isOpened)} >
            <span className="header-navbar__btn-row"></span>
            <span className="header-navbar__btn-row"></span>
            <span className="header-navbar__btn-row"></span>
            <span className="header-navbar__btn-row"></span>
          </div>

          <ul className="header-navbar__list">
            <li className="header-navbar__item">
              <Link to="/" className="header-navbar__link">
                Home
              </Link>
            </li>
            <li className="header-navbar__item">
              <Link to="/places" className="header-navbar__link">
                Places
              </Link>
            </li>
            <li className="header-navbar__item">
              <Link to="/stories" className="header-navbar__link">
                Stories
              </Link>
            </li>
            <li className="header-navbar__item">
              <Link to="/people" className="header-navbar__link">
                People
              </Link>
            </li>
            <li className="header-navbar__item">
              <Link to="/about-us" className="header-navbar__link">
                About us
              </Link>
            </li>
            <li className="header-navbar__item">
              <Link to="/contacts" className="header-navbar__link">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

