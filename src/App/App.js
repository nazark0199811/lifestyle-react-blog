import React from 'react'
import { Route, Switch } from 'react-router'

import Main from './Main/Main'
import Footer from './Footer/Footer'

import '../assets/css/style.css'
import './Header/header.css'
import './Footer/footer.css'

import PlacesPage from './Main/PlacesPage/PlacesPage'
import StoriesPage from './Main/StoriesPage/StoriesPage'
import PeoplePage from './Main/PeoplePage/PeoplePage'
import AboutUs from './Main/AboutUsPage/AboutUsPage'
import ContactsPage from './Main/ContactsPage/ContactsPage'
import { Category } from './Main/Section/Articles/Category'

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route path='/places'>
                    <PlacesPage />
                </Route>
                <Route path='/stories'>
                    <StoriesPage />
                </Route>
                <Route path='/people'>
                    <PeoplePage />
                </Route>
                <Route path='/about-us'>
                    <AboutUs />
                </Route>
                <Route path='/contacts'>
                    <ContactsPage />
                </Route>
                <Route path='/categories/:categoryName'>
                <Category/>
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App