import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import InsertCar from './component/InsertCar'
import TableCar from './component/TableCar'
import About from './component/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/insert",
    element: <InsertCar/>
  },
  {
    path: "/table",
    element: <TableCar/>
  },
  {
    path: "/about",
    element: <About/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
