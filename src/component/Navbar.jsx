import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import '../css/styles.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
console.log(toggle)
  return (
<>
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

    <div className="hamburguer">
        <h2>CarTable</h2>
        <button onClick={handleToggle}>{toggle ? <AiOutlineClose/> : <RxHamburgerMenu/>}</button>
    </div>    
    
    <div className={toggle ? 'burguerEnable' : 'burguerDisable'}>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/insert'}>Insert</Link>
                </li>
                <li>
                    <Link to={'/table'}>Table</Link> 
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
        </div>
</>
  )
}

export default Navbar