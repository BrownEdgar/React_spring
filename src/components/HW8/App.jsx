import React, { useState, useEffect } from "react";
import "./App.scss";
import Categories from "./Categories/Categories";

export default function App() {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "HTML",
      body: "Cillum aliquip nisi minim sit magna duis voluptate aliqua deserunt. Ea laboris non culpa amet elit sint irure ad laboris ut. Qui sint aliqua minim incididunt sint est ullamco deserunt nostrud laboris nisi nostrud reprehenderit.",
      image: "./images/HTML_Image.png",
    },
    {
      id: 2,
      title: "CSS",
      body: "Cillum aliquip nisi minim sit magna duis voluptate aliqua deserunt. Ea laboris non culpa amet elit sint irure ad laboris ut. Qui sint aliqua minim incididunt sint est ullamco deserunt nostrud laboris nisi nostrud reprehenderit. Reprehenderit minim et quis sunt ullamco nulla aute ipsum adipisicing veniam id pariatur do. Culpa id occaecat ullamco duis laboris anim et.",
      image: "./images/CSS_Image.png",
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      body: "Cillum aliquip nisi minim sit magna duis voluptate aliqua deserunt. Ea laboris non culpa amet elit sint irure ad laboris ut. Qui sint aliqua minim incididunt sint est ullamco deserunt nostrud laboris nisi nostrud reprehenderit. Reprehenderit minim et quis sunt ullamco nulla aute ipsum adipisicing veniam id pariatur do. Culpa id occaecat ullamco duis laboris anim et.",
      image: "./images/JS_Image.png",
    },
  ]);
  return (
    <div className="App">
      <Categories data={data}/>
    </div>
  );
}
