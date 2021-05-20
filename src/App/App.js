import React from 'react'
import { Route, Switch } from 'react-router'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import '../assets/css/style.css'
import './Header/header.css'
import './Footer/footer.css'

import PlacesPage from './Main/PlacesPages/PlacesPage'
import CategoryTravel from './Main/Section/Articles/CategoryTravel'
import CategoryExtreme from './Main/Section/Articles/CategoryExtreme'


const App = () => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path='/'>
                <Main/>
            </Route>
            <Route path='/places'>
                <PlacesPage/>
            </Route>
            <Route path='/articles/travel'>
                    <CategoryTravel/>    
            </Route>
            <Route path='/articles/extreme'>
                    <CategoryExtreme/>    
            </Route>
        </Switch>
            <Footer/>
        </>
    )
}


export default App