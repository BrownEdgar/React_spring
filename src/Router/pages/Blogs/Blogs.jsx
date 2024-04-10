import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Blogs.scss";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/posts").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="Blogs">
      <h1>My Blog</h1>
      <div className="Blogs__container">
        {blogs.map((item) => {
          return (
            <div key={item.id} className="Blogs__item">
              <img className="Blogs__image" src={item.image} alt="" />
              <p className="Blogs__info">
                {item.date} / {item.area}
              </p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={item.id}>Read More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
