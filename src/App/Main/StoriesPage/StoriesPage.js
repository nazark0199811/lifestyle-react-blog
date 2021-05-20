import React from 'react'

import pagesHeaderImage from '../../../assets/img/bg_stories.jpg';
import Header from '../../Header/Header.jsx'

const   StoriesPage = () =>{
    return(
        <>
        <Header backgroundImage={pagesHeaderImage} />
        <div className="page">
                
            <h1 className="page-title">Stories</h1>
             
         </div>
        </>
    )
}

export default StoriesPage