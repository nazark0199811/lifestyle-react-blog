import React from "react";

import "./Article.css";

export const ArticleImage = ({ link, image }) => (
    <div className="article-item__image">
        <a href={link}>
            <img src={image} alt="mainPhoto" />
        </a>
    </div>
)