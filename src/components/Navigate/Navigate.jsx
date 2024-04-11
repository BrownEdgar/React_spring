import ROUTES from "../../routes";
import { Link } from 'react-router-dom';;
import React from "react";
import "./Navigate.scss"

export default function navigation() {
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>LOGO</Link>
      </div>
      <Link to={ROUTES.BLOG}>BLog</Link>
    </header>
  );
}
