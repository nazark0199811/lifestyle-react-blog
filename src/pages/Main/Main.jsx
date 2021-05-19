import React from 'react'

import { Places } from '../../components/Places/Places'
import Info from '../../components/Info/Info'
import Form from '../../components/Form/Form'
import { Header } from '../../components';
import { Article, ArticleImage, ArticleFooter, ArticleMetadata } from '../../components/Article';

import places from '../../mock/places'
import articles from '../../mock/articles'



export const Main = () => {
    return (
        <>
            <Header />
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
                    <Info />
                    <div className="info-content__form">
                        <Form />
                    </div>
                </div>

                <div className="articles">
                    <h2> WHAT’S TRAVEL’ </h2>
                    <div className="articles__container">
                        {
                            articles.map((article) => (
                                <Article key={article.id}>
                                    <ArticleImage link={article.imageLink} image={article.img} />
                                    <ArticleMetadata
                                        category={article.category}
                                        categoryIcon={article.iconCategories}
                                        categoryLink={article.categoriesLink}
                                        date={article.date}
                                    />
                                    <div className="article-item__title">
                                        <a href={article.titleLink}>{article.title}</a>
                                    </div>
                                    <div className="article-item__description">{article.description}</div>
                                    <ArticleFooter readMoreLink={article.readLink} />
                                </Article>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

