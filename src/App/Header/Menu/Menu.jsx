import React from 'react'
import '../Menu/menu.css'

const Menu = () => {
    return (
        <>
            <div className="header-navbar__btn">
                <span className="header-navbar__btn-row"></span>
                <span className="header-navbar__btn-row"></span>
                <span className="header-navbar__btn-row"></span>
                <span className="header-navbar__btn-row"></span>
            </div>

            <ul className="header-navbar__list">

                <li className="header-navbar__item">
                    <a href="/" className="header-navbar__link">Home</a>
                </li>

                <li className="header-navbar__item">
                    <a href="/" className="header-navbar__link">Places</a>
                </li>

                <li className="header-navbar__item">
                    <a href="/" className="header-navbar__link">Stories</a>
                </li>

                <li className="header-navbar__item">
                    <a href="/" className="header-navbar__link">People</a>
                </li>

                <li className="header-navbar__item">
                    <a href="/" className="header-navbar__link">About us</a>
                </li>

                <li className="header-navbar__item">
                    <a href="/" className="header-navbar__link">Contacts</a>
                </li>
            </ul>
        </>
    )
}

export default Menu