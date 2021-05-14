import React from 'react'
import '../Places/places.css'

const Places = ({
    link,
    img,
    name,
}) => {
    return (
        <>
            <article className="places-item">
                <a className="places-item__link" href={link}>
                    <div className="places-item__image"><img src={img} alt="beach" /></div>
                    <div className="places-item__title"><h2>{name}</h2></div>
                </a>
            </article>
        </>
    )
}

export default Places