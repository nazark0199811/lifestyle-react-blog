import React from 'react'
import '../Content/content.css'
import logoContent from '../../../assets/img/header_title.png'

const Content = () => {
    return (
        <>
            <div className="header-content__container">
                <div className="header-content__img"><img className="header-content__img" src={logoContent} alt="logo-content" /></div>
            </div>
        </>
    )
}

export default Content