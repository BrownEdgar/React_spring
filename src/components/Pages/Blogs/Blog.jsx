import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Blog.scss";
import trancate from "../../../helpers/trancate";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setBlogs(res.data)
    );
  }, []);

  return (
    <div className="Blog">
      <h1>Products</h1>
      <div className="Blog__wrapper">
        {blogs.map((elem) => {
          return (
            <div className="Blog__card" key={elem.id}>
              <img src={elem.image} alt={elem.title} />
              <div className="Blog__info">
                <h3>{trancate(elem.title, 30)}</h3>
                <p className="Blog__price">$ {elem.price}</p>
                <p className="Blog__desc">{trancate(elem.description, 80)}</p>
                <Link to={`/blog/${elem.id}`}>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
