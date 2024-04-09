import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'

export default function Navbar() {
  return (
    <header>
        <div className="logo">
            <Link to={ROUTES.HOME}>LO<span className='go'>GO</span></Link>
        </div>
        <nav>
            <ul>
                <li><Link to={ROUTES.HOME}>Home</Link></li>
                <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
                <li><Link to={ROUTES.BLOG}>Blog</Link></li>
                <li><Link to={ROUTES.TEAM}>Team</Link></li>
            </ul>
        </nav>
    </header>
  )
}
