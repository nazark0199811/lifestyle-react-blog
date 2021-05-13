import React from 'react'
import '../Places/places.css'

const Places = (props) => {
    return (
        <>
            <article className="places-item">
                <a className="places-item__link" href={props.link}>
                    <div className="places-item__image"><img src={props.img} alt="beach" /></div>
                    <div className="places-item__title"><h2>{props.name}</h2></div>
                </a>
            </article>
        </>
    )
}

export default Places