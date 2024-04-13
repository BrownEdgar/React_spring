import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Products from "../../pages/Products/Products";
import Product from "../../pages/Product/Product";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
