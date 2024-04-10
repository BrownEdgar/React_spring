import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Products from "../../pages/Products/Products";
import News from "../../pages/News/News";
import Contact from "../../pages/Contact/Contact";
import SingleBlog from "../../pages/SingleBlog/SingleBlog";
import "./App.scss";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}
