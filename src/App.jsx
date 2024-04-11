import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes";
import Blog from "./components/Pages/Blogs/Blog";
import Navigate from "./components/Navigate/Navigate"
import OneBLog from './components/Pages/OneBLog/OneBLog'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate/>}></Route>
        <Route path={ROUTES.BLOG} element={<Blog/>}></Route>
        <Route path={ROUTES.SINGLEBLOG} element={<OneBLog/>}></Route>
      </Routes>
    </>
  );
}
