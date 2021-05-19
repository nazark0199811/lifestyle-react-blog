import React from "react";

import { Menu } from "../Menu/Menu";

import logoContent from '../../assets/img/header_title.png'
import defaultBackground from '../../assets/img/header_background.jpg';

import './Header.css'

export const Header = ({ backgroundImage = defaultBackground }) => {
    console.log(defaultBackground);
    return (
        <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Menu />
            <div className="header-content">
                <div className="header-content__container">
                    <div className="header-content__img"><img className="header-content__img" src={logoContent} alt="logo-content" /></div>
                </div>
            </div>
        </header>
    );
};

