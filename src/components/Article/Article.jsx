import React from "react";

import "./Article.css";

export const Article = ({ children }) => {
    return (
        <div className="article-item">
            {children}
        </div>
    );
};




