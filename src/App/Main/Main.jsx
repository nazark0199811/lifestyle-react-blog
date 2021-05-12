import React from 'react'
import Places from './Section/Places/Places'
import Info from './Section/Info/Info'
import Form from './Section/Form/Form'
import Articles from './Section/Articles/Articles'

const Main = () => {
    return (
        <>
            <section className="places">
                <div className="places-container">
                    <Places />
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