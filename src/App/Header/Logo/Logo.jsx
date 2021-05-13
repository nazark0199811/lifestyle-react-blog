import React from 'react'
import logo from '../../../assets/img/header_logo.png'

const Logo = () => {
    return (
        <>
            <div className="header-logo">
                <a href="/" className="header-logo__link">
                    <img className="header-logo__accent" src={logo} alt="logo" />
                </a>
            </div>
        </>
    )
}

export default Logo