import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png"
            alt=""
          />
        </Link>
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
            <Link to={ROUTES.CONTACT}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <i class="bi bi-search"></i>
        <input type="text" />
        <i class="bi bi-basket"></i>
      </div>
    </header>
  );
}
