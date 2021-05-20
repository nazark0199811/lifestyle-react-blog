import React from 'react'

import pagesHeaderImage from '../../../assets/img/bg_contact.jpg';
import Header from '../../Header/Header.jsx'

const   ContactsPage = () =>{
    return(
        <>
        <Header backgroundImage={pagesHeaderImage} />
        <div className="page">
                
            <h1 className="page-title">Contacts</h1>
             
         </div>
        </>
    )
}

export default ContactsPage