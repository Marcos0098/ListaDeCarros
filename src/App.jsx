import { useState } from 'react'
import Navbar from './component/Navbar'

import './css/styles.css'

import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
