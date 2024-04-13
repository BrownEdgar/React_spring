import ROUTES from "../../routes";
import { Link } from 'react-router-dom';;
import React from "react";
import "./Navigation.scss"

export default function Navigation() {
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>LOGO</Link>
      </div>
      <Link to={ROUTES.BLOG}>BLog</Link>
    </header>
  );
}
