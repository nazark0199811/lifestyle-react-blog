import React from "react";

import "./Article.css";

export const ArticleFooter = ({ readMoreLink }) => (
    <div className="article-item__footer">
        <div className="article-item__likes">
            <div>
                <span className="heart-icon">
                    <i className="far fa-heart" />
                </span>
                <span className="heart-count">0</span>
            </div>
        </div>
        <div className="article-item__read">
            <a href={readMoreLink}>
                <span className="read-icon">
                    <i className="far fa-newspaper" />
                </span>
                <span className="read-description">Read more</span>
            </a>
        </div>
    </div>
)

// <a href={categoriesLink}>{categories}</a> - as children