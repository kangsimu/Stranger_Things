import React from 'react';
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { App, Header } from './components'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
    
    <App />

    </BrowserRouter>
   
);