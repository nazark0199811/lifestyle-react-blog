import React from 'react'

import pagesHeaderImage from '../../../assets/img/bg_people.jpg';
import Header from '../../Header/Header.jsx'

const   PeoplePage = () =>{
    return(
        <>
        <Header backgroundImage={pagesHeaderImage} />
        <div className="page">
                
            <h1 className="page-title">People</h1>
             
         </div>
        </>
    )
}

export default PeoplePage