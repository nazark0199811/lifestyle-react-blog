import React from 'react'

import pagesHeaderImage from '../../../assets/img/bg_about.jpg';
import Header from '../../Header/Header.jsx'

const   AboutUs = () =>{
    return(
        <>
        <Header backgroundImage={pagesHeaderImage} />
        <div className="page">
                
            <h1 className="page-title">About Us</h1>
             
         </div>
        </>
    )
}

export default AboutUs