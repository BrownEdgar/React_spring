import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Blogs from "../../pages/Blogs/Blogs";
import Blog from "../../pages/Blog/Blog";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <header className="App__header">
        <Link to="/">Logo</Link>
      </header>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}
