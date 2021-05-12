import React from 'react'
import '../Places/places.css'

const Places = () => {
    return (
        <>
            <article className="places-item">
                <a className="places-item__link" href="#">
                    <div className="places-item__image"><img src="assets/img/beach.jpg" alt="gallery_2" /></div>
                    <div className="places-item__title"><h2>The sea is an emotion.The sea is an emotion.nh</h2></div>
                </a>
            </article>

            <article className="places-item">
                <a className="places-item__link" href="#">
                    <div className="places-item__image"><img src="assets/img/smock.jpg" alt="gallery_1" /></div>
                    <div className="places-item__title"><h2>The sea is an emotion.The sea is an emotion.</h2></div>
                </a>
            </article>

            <article className="places-item">
                <a className="places-item__link" href="#">
                    <div className="places-item__image"><img src="assets/img/gallery_7.jpg" alt="gallery_7" /></div>
                    <div className="places-item__title"><h2>The sea is an emotion.The sea is an emotion.</h2></div>
                </a>
            </article>

            <article className="places-item">
                <a className="places-item__link" href="#">
                    <div className="places-item__image"><img src="assets/img/gallery_6.jpg" alt="gallery_5" /></div>
                    <div className="places-item__title"><h2>The sea is an emotion.The sea is an emotion.</h2></div>
                </a>
            </article>
        </>
    )
}

export default Places