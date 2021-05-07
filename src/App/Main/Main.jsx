import React from 'react'

const Main = () => {
    return (
        <>
            <section class="places">
                <div class="places-container">

                    <article class="places-item">
                        <a class="places-item__link" href="#">
                            <div class="places-item__image"><img src="assets/img/beach.jpg" alt="gallery_2" /></div>
                            <div class="places-item__title"><h2>The sea is an emotion.The sea is an emotion.nh</h2></div>
                        </a>
                    </article>

                    <article class="places-item">
                        <a class="places-item__link" href="#">
                            <div class="places-item__image"><img src="assets/img/smock.jpg" alt="gallery_1" /></div>
                            <div class="places-item__title"><h2>The sea is an emotion.The sea is an emotion.</h2></div>
                        </a>
                    </article>

                    <article class="places-item">
                        <a class="places-item__link" href="#">
                            <div class="places-item__image"><img src="assets/img/gallery_7.jpg" alt="gallery_7" /></div>
                            <div class="places-item__title"><h2>The sea is an emotion.The sea is an emotion.</h2></div>
                        </a>
                    </article>

                    <article class="places-item">
                        <a class="places-item__link" href="#">
                            <div class="places-item__image"><img src="assets/img/gallery_6.jpg" alt="gallery_5" /></div>
                            <div class="places-item__title"><h2>The sea is an emotion.The sea is an emotion.</h2></div>
                        </a>
                    </article>
                </div>
            </section>


            <section class="info">
                <div class="info__container" >

                    <div class="info-content">

                        <div class="info-content__title">
                            <h2>Are you ready to travel? <br /> Let's start!</h2>
                        </div>

                        <div class="info-content__article">
                            <p>People enjoy traveling, but what are their reasons they leave their homes? There are several of them. First comes curiosity.
                            Films about far-off places, books and friends’ stories encourage us to undertake our own trips.
                            </p>
                            <p>Education comes next. Learning through traveling is very popular.
                            It does not mean only visiting museums and admiring architectural ensembles.
                            It also means to get a glimpse of another life style. You can never get that sort of knowledge from books.</p>
                            <p>And besides, there are people who just change places.
                            Probably they have problems at home and that is their way  — rather to escape than to solve.
                            Others look for adventures. We are all different and  and have different motives for traveling.</p>
                            <p>People enjoy traveling, but what are their reasons they leave their homes? There are several of them. First comes curiosity.
                            Films about far-off places, books and friends’ stories encourage us to undertake our own trips.
                            </p>
                            <p>Education comes next. Learning through traveling is very popular.
                            It does not mean only visiting museums and admiring architectural ensembles.
                            It also means to get a glimpse of another life style. You can never get that sort of knowledge from books.</p>
                            <p>And besides, there are people who just change places.
                            Probably they have problems at home and that is their way  — rather to escape than to solve.
                            Others look for adventures. We are all different and  and have different motives for traveling.</p>
                        </div>
                    </div>

                    <div class="info-content__form">
                        <form action="contacts.php" method="GET">
                            <h2 > Ask question here</h2>

                            <fieldset>
                                <label class="info-content__label">Name
                    <input class="info-content__input" type="text" name="name" placeholder="Name" /></label>
                                <label class="info-content__label">Phone
                    <input class="info-content__input" type="tel" name="phone" placeholder="Phone number" /></label>
                                <label class="info-content__label">Email
                    <input class="info-content__input" type="email" name="email" placeholder="Email" /></label>
                            </fieldset>

                            <fieldset>
                                <legend>Ask a question</legend>
                                <label class="info-content__label" for="multitext"></label>
                                <textarea name="txt" id="multitext" placeholder="Ask a question..."></textarea>
                            </fieldset>

                            <input class="info-content__button" type="submit" name="send" value="Send questions" />
                        </form>
                    </div>
                </div>

                <div class="articles">
                    <h2> WHAT’S TRAVEL’ </h2>

                    <div class="articles__container">
                        <div class="article-item">
                            <div class="article-item__image"><a href="#"><img src="assets/img/categories_1.jpg" alt="" /></a></div>

                            <div class="article-item__head">
                                <span class="categories-icon"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="categories-name"><a href="#">Travel</a></span>
                                <span class="date-icon"><i class="far fa-clock"></i></span>
                                <span class="date-data">April 27, 2021</span>
                            </div>

                            <div class="article-item__title"><a href="#">In hendrerit nulla quam nunc</a></div>
                            <div class="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                            <div class="article-item__footer">

                                <div class="article-item__likes">
                                    <a href="#">
                                        <span class="heart-icon"><i class="far fa-heart"></i></span>
                                        <span class="heart-count">12</span>
                                    </a>
                                </div>

                                <div class="article-item__read">
                                    <a href="#">
                                        <span class="read-icon"><i class="far fa-newspaper"></i></span>
                                        <span class="read-description">Read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="article-item">
                            <div class="article-item__image"><a href="#"><img src="assets/img/categories_2.jpg" alt="" /></a></div>

                            <div class="article-item__head">
                                <span class="categories-icon"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="categories-name"><a href="#">Travel</a></span>
                                <span class="date-icon"><i class="far fa-clock"></i></span>
                                <span class="date-data">April 27, 2021</span>
                            </div>

                            <div class="article-item__title"><a href="#">In hendrerit nulla quam nunc</a></div>
                            <div class="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                            <div class="article-item__footer">

                                <div class="article-item__likes">
                                    <a href="#">
                                        <span class="heart-icon"><i class="far fa-heart"></i></span>
                                        <span class="heart-count">12</span>
                                    </a>
                                </div>

                                <div class="article-item__read">
                                    <a href="#">
                                        <span class="read-icon"><i class="far fa-newspaper"></i></span>
                                        <span class="read-description">Read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="article-item">
                            <div class="article-item__image"><a href="#"><img src="assets/img/chill_back.jpg" alt="" /></a></div>

                            <div class="article-item__head">
                                <span class="categories-icon"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="categories-name"><a href="#">Travel</a></span>
                                <span class="date-icon"><i class="far fa-clock"></i></span>
                                <span class="date-data">April 21, 2021</span>
                            </div>

                            <div class="article-item__title"><a href="#">In hendrerit nulla quam nunc</a></div>
                            <div class="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                            <div class="article-item__footer">

                                <div class="article-item__likes">
                                    <a href="#">
                                        <span class="heart-icon"><i class="far fa-heart"></i></span>
                                        <span class="heart-count">12</span>
                                    </a>
                                </div>

                                <div class="article-item__read">
                                    <a href="#">
                                        <span class="read-icon"><i class="far fa-newspaper"></i></span>
                                        <span class="read-description">Read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="article-item">
                            <div class="article-item__image"><a href="#"><img src="assets/img/categories_44.jpg" alt="" /></a></div>

                            <div class="article-item__head">
                                <span class="categories-icon"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="categories-name"><a href="#">Extreme</a></span>
                                <span class="date-icon"><i class="far fa-clock"></i></span>
                                <span class="date-data">April 21, 2021</span>
                            </div>

                            <div class="article-item__title"><a href="#">In hendrerit nulla quam nunc</a></div>
                            <div class="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                            <div class="article-item__footer">

                                <div class="article-item__likes">
                                    <a href="#">
                                        <span class="heart-icon"><i class="far fa-heart"></i></span>
                                        <span class="heart-count">12</span>
                                    </a>
                                </div>

                                <div class="article-item__read">
                                    <a href="#">
                                        <span class="read-icon"><i class="far fa-newspaper"></i></span>
                                        <span class="read-description">Read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="article-item">
                            <div class="article-item__image"><a href="#"><img src="assets/img/categories_7.jpg" alt="" /></a></div>

                            <div class="article-item__head">
                                <span class="categories-icon"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="categories-name"><a href="#">Extreme</a></span>
                                <span class="date-icon"><i class="far fa-clock"></i></span>
                                <span class="date-data">April 21, 2021</span>
                            </div>

                            <div class="article-item__title"><a href="#">In hendrerit nulla quam nunc</a></div>
                            <div class="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                            <div class="article-item__footer">

                                <div class="article-item__likes">
                                    <a href="#">
                                        <span class="heart-icon"><i class="far fa-heart"></i></span>
                                        <span class="heart-count">12</span>
                                    </a>
                                </div>

                                <div class="article-item__read">
                                    <a href="#">
                                        <span class="read-icon"><i class="far fa-newspaper"></i></span>
                                        <span class="read-description">Read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="article-item">
                            <div class="article-item__image"><a href="#"><img src="assets/img/categories_5.jpg" alt="" /></a></div>

                            <div class="article-item__head">
                                <span class="categories-icon"><i class="fas fa-map-marker-alt"></i></span>
                                <span class="categories-name"><a href="#">Extreme</a></span>
                                <span class="date-icon"><i class="far fa-clock"></i></span>
                                <span class="date-data">April 21, 2021</span>
                            </div>

                            <div class="article-item__title"><a href="#">In hendrerit nulla quam nunc</a></div>
                            <div class="article-item__description">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</div>

                            <div class="article-item__footer">

                                <div class="article-item__likes">
                                    <a href="#">
                                        <span class="heart-icon"><i class="far fa-heart"></i></span>
                                        <span class="heart-count">12</span>
                                    </a>
                                </div>

                                <div class="article-item__read">
                                    <a href="#">
                                        <span class="read-icon"><i class="far fa-newspaper"></i></span>
                                        <span class="read-description">Read more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main