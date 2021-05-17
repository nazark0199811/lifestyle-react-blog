import React from 'react'
import logo from '../../../assets/img/header_logo.png'
import { Link } from 'react-router-dom'


const Logo = () => {
    return (
        <>
            <div className="header-logo">
                
                   <Link to="/"> <img className="header-logo__accent" src={logo} alt="logo" /> </Link>
                
            </div>
        </>
    )
}

export default Logo