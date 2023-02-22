import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './component/Home'
import InsertCar from './component/InsertCar'
import TableCar from './component/TableCar'
import About from './component/About'
import {BrowserRouter, Routes, Route  } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='insert' element={<InsertCar/>}/>
        <Route path='table' element={<TableCar/>}/>
        <Route path='about' element={<About/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
)
