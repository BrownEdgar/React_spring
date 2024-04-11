import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Blog.scss";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="Blog">
      <h3>My Recent Posts</h3>
      <h1>My Blog</h1>
      <div className="Blog__wrapper">
        {blogs.map((elem) => {
          return (
            <div className="Blog__card" key={elem.id}>
              <div className="Blog__image">
                <img src={elem.image} alt="" />
              </div>
              <div className="Blog__text">
                <p className="Blog__info">{elem.data} / {elem.type}</p>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
                <Link to={`${elem.id}`}>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
