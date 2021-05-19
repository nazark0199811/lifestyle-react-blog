import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< Updated upstream
import App from './App/App'
import {BrowserRouter} from 'react-router-dom'
=======
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './components';
>>>>>>> Stashed changes

ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>,document.getElementById("root"))