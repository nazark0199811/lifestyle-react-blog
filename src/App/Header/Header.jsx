import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Content from './Content/Content'

import defaultBackground from '../../assets/img/header_background.jpg';

const Header = ({ backgroundImage = defaultBackground }) => {
    
    return (
            <header className="header "  style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="header-menu">
                    <div className="header-menu__container">
                            <Logo/>
                        <nav className="header-navbar">
                            <Menu/>
                        </nav>
                    </div>
                </div>
                <div className="header-content">
                    <Content/>
                </div>
            </header>
    )
}

export default Header