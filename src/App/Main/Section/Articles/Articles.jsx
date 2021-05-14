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
                <div className="article-item__image"><a href={imageLink}><img src={img} alt="image" /></a></div>

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

            {/* <div className="article-item">
                    <div className="article-item__image"><a href="/"><img src={lake} alt="" /></a></div>

                    <div className="article-item__head">
                        <span className="categories-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="categories-name"><a href="/"> Travel</a></span>
                        <span className="date-icon"><i className="far fa-clock"></i></span>
                        <span className="date-data"> April 27, 2021</span>
                    </div>

                    <div className="article-item__title"><a href="/">In hendrerit nulla quam nunc</a></div>
                    <div className="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                    <div className="article-item__footer">

                        <div className="article-item__likes">
                            <a href="/">
                                <span className="heart-icon"><i className="far fa-heart"></i></span>
                                <span className="heart-count"> 12</span>
                            </a>
                        </div>

                        <div className="article-item__read">
                            <a href="/">
                                <span className="read-icon"><i className="far fa-newspaper"></i></span>
                                <span className="read-description"> Read more</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="article-item">
                    <div className="article-item__image"><a href="/"><img src={bridge} alt="" /></a></div>

                    <div className="article-item__head">
                        <span className="categories-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="categories-name"><a href="/"> Travel</a></span>
                        <span className="date-icon"><i className="far fa-clock"></i></span>
                        <span className="date-data"> April 21, 2021</span>
                    </div>

                    <div className="article-item__title"><a href="/">In hendrerit nulla quam nunc</a></div>
                    <div className="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                    <div className="article-item__footer">

                        <div className="article-item__likes">
                            <a href="/">
                                <span className="heart-icon"><i className="far fa-heart"></i></span>
                                <span className="heart-count"> 12</span>
                            </a>
                        </div>

                        <div className="article-item__read">
                            <a href="/">
                                <span className="read-icon"><i className="far fa-newspaper"></i></span>
                                <span className="read-description"> Read more</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="article-item">
                    <div className="article-item__image"><a href="/"><img src={scate} alt="" /></a></div>

                    <div className="article-item__head">
                        <span className="categories-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="categories-name"><a href="/"> Extreme</a></span>
                        <span className="date-icon"><i className="far fa-clock"></i></span>
                        <span className="date-data"> April 21, 2021</span>
                    </div>

                    <div className="article-item__title"><a href="/">In hendrerit nulla quam nunc</a></div>
                    <div className="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                    <div className="article-item__footer">

                        <div className="article-item__likes">
                            <a href="/">
                                <span className="heart-icon"><i className="far fa-heart"></i></span>
                                <span className="heart-count"> 12</span>
                            </a>
                        </div>

                        <div className="article-item__read">
                            <a href="/">
                                <span className="read-icon"><i className="far fa-newspaper"></i></span>
                                <span className="read-description"> Read more</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="article-item">
                    <div className="article-item__image"><a href="/"><img src={bmx} alt="bmx" /></a></div>

                    <div className="article-item__head">
                        <span className="categories-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="categories-name"><a href="/"> Extreme</a></span>
                        <span className="date-icon"><i className="far fa-clock"></i></span>
                        <span className="date-data"> April 21, 2021</span>
                    </div>

                    <div className="article-item__title"><a href="/">In hendrerit nulla quam nunc</a></div>
                    <div className="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                    <div className="article-item__footer">

                        <div className="article-item__likes">
                            <a href="/">
                                <span className="heart-icon"><i className="far fa-heart"></i></span>
                                <span className="heart-count"> 12</span>
                            </a>
                        </div>

                        <div className="article-item__read">
                            <a href="/">
                                <span className="read-icon"><i className="far fa-newspaper"></i></span>
                                <span className="read-description"> Read more</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="article-item">
                    <div className="article-item__image"><a href="/"><img src={baggi} alt="" /></a></div>

                    <div className="article-item__head">
                        <span className="categories-icon"><i className="fas fa-map-marker-alt"></i></span>
                        <span className="categories-name"><a href="/"> Extreme</a></span>
                        <span className="date-icon"><i className="far fa-clock"></i></span>
                        <span className="date-data"> April 21, 2021</span>
                    </div>

                    <div className="article-item__title"><a href="/">In hendrerit nulla quam nunc</a></div>
                    <div className="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                    <div className="article-item__footer">

                        <div className="article-item__likes">
                            <a href="/">
                                <span className="heart-icon"><i className="far fa-heart"></i></span>
                                <span className="heart-count"> 12</span>
                            </a>
                        </div>

                        <div className="article-item__read">
                            <a href="/">
                                <span className="read-icon"><i className="far fa-newspaper"></i></span>
                                <span className="read-description"> Read more</span>
                            </a>
                        </div>
                    </div>
                </div> */}
        </>
    )
}

export default Articles