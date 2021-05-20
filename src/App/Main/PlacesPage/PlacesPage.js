import React from 'react'

import pagesHeaderImage from '../../../assets/img/bg_places.jpg';
import Header from '../../Header/Header.jsx'

const   PlacesPage = () =>{
    return(
        <>
        <Header backgroundImage={pagesHeaderImage} />
        <div className="page">
                
            <h1 className="page-title">Places</h1>
             
         </div>
        </>
    )
}

export default PlacesPage
