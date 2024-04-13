import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Blog from "./Pages/Products/Products";
import SIngleBlog from "./Pages/SIngleBlog/SIngleProducts";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path={ROUTES.BLOG}   element={<Blog />} />
        <Route path={ROUTES.SINGLEBLOG} element={<SIngleBlog />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </div>
  );
}
