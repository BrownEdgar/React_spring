import React from 'react'
import { Link } from 'react-router-dom'
// import Home from '../Home/Home'
import './Navbar.scss'
import ROUTES from '../../routes'

export default function Navbar() {
  return (
        <header>
        <div className='logo'>
        <Link to="/"><img src="/images/logo.png" alt="" /></Link>
        </div>
        <nav>
            <ul>
                <li>
                <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                <Link to={ROUTES.PRODUCTS}>Our Products</Link>
                </li>
                <li>
                <Link to={ROUTES.BLOG}>Blog</Link>
                </li>
                <li>
                <Link to={ROUTES.ABOUT}>About</Link>
                </li>
                <li>
                <Link to={ROUTES.CONTACT}>Contact Us</Link>
                </li>
            </ul>
        </nav>
        </header>
  )
}
