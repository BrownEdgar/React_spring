import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Blog from "./components/Pages/Blogs/Blog";
import SIngleBlog from "./components/Pages/SIngleBlog/SIngleBlog";

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
