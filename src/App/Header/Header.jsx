import React from 'react'

const Header = () => {
    return (
        <>
            <header class="header">

                <div class="header-menu">
                    <div class="header-menu__container">

                        <div class="header-logo">
                            <a href="#" class="header-logo__link">
                                <img class="header-logo__accent" src="assets/img/header_logo.png" alt="logo" />
                            </a>
                        </div>

                        <nav class="header-navbar">

                            <div class="header-navbar__btn">
                                <span class="header-navbar__btn-row"></span>
                                <span class="header-navbar__btn-row"></span>
                                <span class="header-navbar__btn-row"></span>
                                <span class="header-navbar__btn-row"></span>
                            </div>

                            <ul class="header-navbar__list">

                                <li class="header-navbar__item">
                                    <a href="#" class="header-navbar__link">Home</a>
                                </li>

                                <li class="header-navbar__item">
                                    <a href="#" class="header-navbar__link">Places</a>
                                </li>

                                <li class="header-navbar__item">
                                    <a href="#" class="header-navbar__link">Stories</a>
                                </li>

                                <li class="header-navbar__item">
                                    <a href="#" class="header-navbar__link">People</a>
                                </li>

                                <li class="header-navbar__item">
                                    <a href="#" class="header-navbar__link">About us</a>
                                </li>

                                <li class="header-navbar__item">
                                    <a href="#" class="header-navbar__link">Contacts</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="header-content">
                    <div class="header-content__container">
                        <div class="header-content__img"><img class="header-content__img" src="assets/img/header_title.png" alt="logo" /></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header