import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Content from './Content/Content'

const Header = () => {
    return (
        <>
            <header className="header">
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
        </>
    )
}

export default Header