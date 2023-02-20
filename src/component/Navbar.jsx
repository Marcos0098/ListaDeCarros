import React from 'react'
import { Link } from 'react-router-dom'

import '../css/styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/insert'}>Insert</Link>
            </li>
            <h2>CarTable</h2>
            <li>
                <Link to={'/table'}>Table</Link> 
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar