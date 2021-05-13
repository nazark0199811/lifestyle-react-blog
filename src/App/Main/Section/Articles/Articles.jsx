import React from 'react'
import '../Articles/articles.css'

import first from '../../../../assets/img/first.jpg'
import lake from '../../../../assets/img/lake.jpg'
import bridge from '../../../../assets/img/bridge.jpg'
import scate from '../../../../assets/img/scate.jpg'
import bmx from '../../../../assets/img/bmx.jpg'
import baggi from '../../../../assets/img/baggi.jpg'

const Articles = () => {
    return (
        <>
            <h2> WHAT’S TRAVEL’ </h2>

            <div className="articles__container">
                
                <div className="article-item">
                    <div className="article-item__image"><a href="/"><img src={first} alt="" /></a></div>

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
            </div>
        </>
    )
}

export default Articles