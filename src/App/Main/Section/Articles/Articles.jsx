import React from 'react'
import '../Articles/articles.css'

const Articles = ({
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
}) => {
    
    return (
        <>
            <div className="article-item">
                <div className="article-item__image"><a href={imageLink}><img src={img} alt="mainPhoto" /></a></div>

                <div className="article-item__head">
                    <span className="categories-icon">{iconCategories}</span>
                    <span className="categories-name"><a href={categoriesLink}>{categories}</a></span>
                    <span className="date-icon">{iconDate}</span>
                    <span className="date-data">{date}</span>
                </div>

                <div className="article-item__title"><a href={titleLink}>{title}</a></div>
                <div className="article-item__description">{description}</div>

                <div className="article-item__footer">
                    <div className="article-item__likes">
                        <a href={likeLink}>
                            <span className="heart-icon">{iconLike}</span>
                            <span className="heart-count">{like}</span>
                        </a>
                    </div>
                    <div className="article-item__read">
                        <a href={readLink}>
                            <span className="read-icon">{iconRead}</span>
                            <span className="read-description">{read}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

Articles.defaultProps = {
    categories:"categories None",
    title:"This is default title",
    description:"This is defaul description"
}

export default Articles