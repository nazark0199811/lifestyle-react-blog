import React from 'react'
import Places from './Section/Places/Places.jsx'
import Info from './Section/Info/Info'
import Form from './Section/Form/Form'
import Articles from './Section/Articles/Articles'
import places from './Section/Places/places.js'
import articles from './Section/Articles/articles'

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
                <h2> WHAT’S TRAVEL’ </h2>
                    <div className="articles__container">
                    {
                    articles.map(article =>(
                    <Articles key={article.id}
                    img={article.img}
                    imageLink={article.imageLink}
                    iconCategories={article.iconCategories}
                    categories={article.categories}
                    categoriesLink={article.categoriesLink}
                    iconDate={article.iconDate}
                    date={article.date}
                    title={article.title}
                    titleLink={article.titleLink}
                    description={article.description}
                    iconLike={article.iconLike}
                    like={article.like}
                    likeLink={article.likeLink}
                    iconRead={article.iconRead}
                    readLink={article.readLink}
                    read={article.read}
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