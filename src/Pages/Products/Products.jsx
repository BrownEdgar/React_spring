import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.scss";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) =>
      setBlogs(res.data.products)
    );
  }, []);

  return (
    <div className="Blog">
      <h1>Products</h1>
      <div className="Blog__wrapper">
        {blogs.map((elem) => {
          return (
            <div className="Blog__card" key={elem.id}>
              <img src={elem.images[0]} alt={elem.title} />
              <div className="Blog__info">
                <h3>{elem.title}</h3>
                <p className="Blog__price"> {elem.price} $</p>
                <p className="Blog__desc">{elem.description}</p>
                <Link to={`/blog/${elem.id}`}>Open</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
