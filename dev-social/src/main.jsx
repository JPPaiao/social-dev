import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App'
import TabelaDev from './pages/tabelaDev/index';
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='tabela-devs' element={<TabelaDev />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
