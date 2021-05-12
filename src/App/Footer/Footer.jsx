import React from 'react'
import Title from './Title/Title'
import Social from './Social/Social'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <Social/>
                    <Title/>
                </div>
            </footer>
        </>
    )
}

export default Footer