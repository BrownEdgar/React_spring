import React from 'react'
import { Link } from 'react-router-dom'
// import Home from '../Home/Home'
import './Navbar.scss'

export default function Navbar() {
  return (
        <header>
        <div className='logo'>
        <Link to="/"><img src="/images/logo.png" alt="" /></Link>
        </div>
        <nav>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/products'>Our Products</Link>
                </li>
                <li>
                <Link to='/news'>News</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/contact'>Contact Us</Link>
                </li>
            </ul>
        </nav>
        </header>
  )
}
