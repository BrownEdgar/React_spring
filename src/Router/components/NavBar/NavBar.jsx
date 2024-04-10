import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar__logo">
        <Link to="/">Bakery</Link>
      </div>
      <div className="NavBar__menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
