import React, { useEffect, useState } from "react";
import "./Blog.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import trencate from "../../helpers/trencate";
import ROUTES from "../../routes";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) => setBlog(res.data));
  }, []);

  return (
    <div className="BlogMain">
      <div className="BlogMain__poster">
        <h1>Blog</h1>
      </div>
      <h2>Our Blogs</h2>
      <div className="BlogMain__wrapper">
        {blog.map((b) => {
          return (
            <div className="BlogMain__items" key={b.id}>
              <div className="BlogMain__items__content">
                <img src={b.img} alt="" />
              </div>
              <div className="BlogMain__items__info">
                <span>
                  {b.date}/{b.topic}
                </span>
                <h3>{b.title}</h3>
                <p>{trencate(b.description, 50)}</p>
                <Link to={`${b.id}`}>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
