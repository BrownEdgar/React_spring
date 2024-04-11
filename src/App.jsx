import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import ROUTES from "./router";
import Blog from "./components/Pages/Blogs/Blog";
import Navigate from "./components/Navigate/Navigate"
import SIngleBlog from "./components/Pages/SIngleBlog/SIngleBlog";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate/>}></Route>
        <Route path={ROUTES.BLOG} element={<Blog/>}></Route>
        <Route path={ROUTES.SINGLEBLOG} element={<SIngleBlog/>}></Route>
      </Routes>
    </>
  );
}
