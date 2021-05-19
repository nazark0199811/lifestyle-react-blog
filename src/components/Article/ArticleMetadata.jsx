import React from "react";

import "./Article.css";

export const ArticleMetadata = ({ category, categoryIcon, categoryLink, date }) => (
    <div className="article-item__head">
        <span className="categories-icon">{categoryIcon}</span>
        <span className="categories-name">
            <a href={categoryLink}>{category}</a>
        </span>
        <span className="date-icon">
            <i className="far fa-clock" />
        </span>
        <span className="date-data">{date}</span>
    </div>
)