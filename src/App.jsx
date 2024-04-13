import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes";
import MainLayout from "./layouts/MainLayout";
import {
  About,
  Blog,
  Contact,
  Home,
  Products,
  SingleBlog,
  SingleProduct,
} from "./pages";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SINGLEBLOG} element={<SingleBlog />} />
          <Route path={ROUTES.SINGLEPRODUCT} element={<SingleProduct />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
