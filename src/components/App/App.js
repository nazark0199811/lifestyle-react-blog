import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

import { Main, Places, Category } from '../../pages'
import { Footer } from '../Footer/Footer'


import '../../assets/css/style.css'

export const App = () => (
    <>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/places"> 
                <Places />
            </Route>
            <Route path="/category/:categoryName">
                <Category />
            </Route>
            <Route path="*">
                <h2>404</h2>
            </Route>
        </Switch>
        <Footer />
    </>
)


