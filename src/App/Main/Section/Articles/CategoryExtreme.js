import React from 'react'

import articles from './articles.js'
import Articles from './Articles.jsx'

const   CategoryExtreme = () =>{
    return(
        <>
                
                <div className="articles">
                    <h2> WHAT’S TRAVEL’ </h2>
                    <div className="articles__container">
                        {
                            articles.map((article) => (
                                <Articles
                                    key={article.id}
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
        </>
    )
}

export default CategoryExtreme
