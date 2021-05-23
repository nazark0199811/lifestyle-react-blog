import React from 'react';
import { useParams } from "react-router-dom";

import articles from './articles';
import Articles from './Articles.jsx'

export const Category = () => {
    
    const { categoryName } = useParams();

    const articlesWithCategory = articles.filter((article) => article.categories === categoryName);
    return <div className="category-wrapper">
        {
            articlesWithCategory.map((article) => (
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
                    likeLink={article.likeLink}
                    iconRead={article.iconRead}
                    readLink={article.readLink}
                    read={article.read}
                />
            ))
        }
    </div>
}