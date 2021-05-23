import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../Articles/articles.css'

class Articles extends Component {

    render() {
        const {
            id,
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
            iconRead,
            readLink,
            read,
            isLiked,
            removeLike,
            addLike
        } = this.props

        return (
            <>
                <div className="article-item">
                    <div className="article-item__image"><a href={imageLink}><img src={img} alt="mainPhoto" /></a></div>

                    <div className="article-item__head">
                        <span className="categories-icon">{iconCategories}</span>
                        <span className="categories-name"><Link to={categoriesLink}>{categories}</Link></span>
                        <span className="date-icon">{iconDate}</span>
                        <span className="date-data">{date}</span>
                    </div>

                    <div className="article-item__title"><Link to={titleLink}>{title}</Link></div>
                    <div className="article-item__description">{description}</div>

                    <div className="article-item__footer">
                        <div className="article-item__likes">

                            <button style={{
                                height: "30px",
                                width: "30px"
                            }} onClick={() => isLiked ? removeLike(id) : addLike(id)}>
                                {
                                    isLiked ? <span>&#9829;</span> : <span>&#9825;</span>
                                }
                            </button>

                            {/* <a href={likeLink}>
                            <span className="heart-icon">{iconLike}</span>
                        </a> */}
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
}

Articles.defaultProps = {
    categories: "categories None",
    title: "This is default title",
    description: "This is defaul description"
}

const mapStateToProps = (state, {id}) => ({
    isLiked:state.articlesLikeState[id]
})

const mapDispatchToProps = (dispatch, {id}) => ({
    addLike:() => dispatch({
        type:"LIKE",
        id
    }),

    removeLike:() => dispatch({
        type:"DISLIKE",
        id
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles)