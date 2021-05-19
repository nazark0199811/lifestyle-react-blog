import React from 'react'

import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__social">
                    <a href="/" className="fab fa-facebook-square"> </a>
                    <a href="/" className="fab fa-google-plus-square"> </a>
                    <a href="/" className="fab fa-twitter-square"> </a>
                    <a href="/" className="fab fa-pinterest-square"> </a>
                    <a href="/" className="fab fa-flickr"> </a>
                </div>
                <div className="footer__title">
                    <span>TRAVEL IS LIFE</span><br />
                    <span> I PREFER TRAVELING LIGHT.</span>
                </div>
            </div>
        </footer>
    )
}
