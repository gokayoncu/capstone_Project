import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {CounterProvider} from './context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <CounterProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CounterProvider>
)
