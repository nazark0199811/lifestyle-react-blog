import React from 'react'
import Places from './Section/Places/Places.jsx'
import Info from './Section/Info/Info'
import Form from './Section/Form/Form'
import Articles from './Section/Articles/Articles'
import places from './Section/Places/places.js'

const Main = () => {
    return (
        <>
            <section className="places">
                <div className="places-container">
                {
                    places.map(place =>(
                    <Places key={place.id}
                    name={place.name}
                    img={place.img}
                    link={place.link}
                    />
                    ))
                }
                </div>
            </section>

            <section className="info">
                <div className="info__container" >
                    <Info/>
                    <div className="info-content__form">
                    <Form/>
                    </div>
                </div>

                <div className="articles">
                    <Articles/>
                </div>
            </section>
        </>
    )
}

export default Main