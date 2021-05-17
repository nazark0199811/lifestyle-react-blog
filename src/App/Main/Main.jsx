import React from 'react'
import { Route } from 'react-router'
import Places from './Section/Places/Places.jsx'
import Info from './Section/Info/Info'
import Form from './Section/Form/Form'
import Articles from './Section/Articles/Articles.jsx'
import places from './Section/Places/places.js'
import articles from './Section/Articles/articles'
import PlacesPage from './PlacesPages/PlacesPage'

const Main = ({

}) => {
    return (
        <>
            <section className="places">
                <div className="places-container">
                    {
                        places.map(({
                            id,
                            name,
                            img,
                            link,
                        }) => (
                            <Places
                                key={id}
                                name={name}
                                img={img}
                                link={link}
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
                    <h2> WHAT’S TRAVEL’ </h2>
                    <div className="articles__container">
                        {
                            articles.map(({
                                id,
                                img,
                                imageLink,
                                iconCategories,
                                categories,
                                categoriesLink,
                                iconDate,
                                date,
                                title,
                                titleLink,
                                description,
                                iconLike,
                                like,
                                likeLink,
                                iconRead,
                                readLink,
                                read,
                            }) => (
                                <Articles
                                    key={id}
                                    img={img}
                                    imageLink={imageLink}
                                    iconCategories={iconCategories}
                                    categories={categories}
                                    categoriesLink={categoriesLink}
                                    iconDate={iconDate}
                                    date={date}
                                    title={title}
                                    titleLink={titleLink}
                                    description={description}
                                    iconLike={iconLike}
                                    like={like}
                                    likeLink={likeLink}
                                    iconRead={iconRead}
                                    readLink={readLink}
                                    read={read}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main