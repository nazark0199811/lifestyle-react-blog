/* eslint-disable no-lone-blocks */
import React from 'react';
import { useParams } from "react-router-dom";

import { Article, ArticleFooter, ArticleImage, ArticleMetadata } from '../../components/Article'

import articles from '../../mock/articles';

export const Category = () => {
    const { categoryName } = useParams();

    const articlesWithCategory = articles.filter((article) => article.category === categoryName);
    return <div className="category-wrapper">
        {
            articlesWithCategory.map((article) => (
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
}