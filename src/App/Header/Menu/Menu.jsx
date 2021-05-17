import React from 'react'
import '../Menu/menu.css'
import {Link} from 'react-router-dom'

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
                    <Link to="/" className="header-navbar__link">Home</Link>
                </li>
                <li className="header-navbar__item">
                    <Link to="/places" className="header-navbar__link">Places</Link>
                </li>
                <li className="header-navbar__item">
                    <Link to="/stories" className="header-navbar__link">Stories</Link>
                </li>
                <li className="header-navbar__item">
                    <Link to="/people" className="header-navbar__link">People</Link>
                </li>
                <li className="header-navbar__item">
                    <Link to="/about-us" className="header-navbar__link">About us</Link>
                </li>
                <li className="header-navbar__item">
                    <Link to="/contacts" className="header-navbar__link">Contacts</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu