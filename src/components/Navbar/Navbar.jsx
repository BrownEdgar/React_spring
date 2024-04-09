import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'

export default function Navbar() {
    return (
        <header>
            <div className="logo">
                <Link to={ROUTES.HOME}>Bakery</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTES.HOME}>HOME</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.ABOUT}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.PRODUCTS}>OUR PRODUCTS</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.NEWS}>NEWS</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.CONTACT}>CONTACT US</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
