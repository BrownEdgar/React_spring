import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../routes";
import "./SingleBlog.scss";
import trencate from "../../helpers/trencate";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [otherBlogs, setOtherBlogs] = useState([]);
  const textSlice = blog ? Math.ceil(blog?.description?.length / 2) : 0;

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + `/${id}`).then((res) =>
      setBlog(res.data)
    );
  }, [id]);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL, {
      params: {
        _limit: 3,
      },
    }).then((res) => setOtherBlogs(res.data));
  }, []);

  return (
    <div className="SingleBlogMain">
      <div className="SingleBlogMain__Element">
        <div>
          <Link to={`${ROUTES.BLOG}`}>
            <i class="bi bi-chevron-left"></i>
            All Blogs
          </Link>
        </div>
        <h1 className="title">{blog.title}</h1>
        <img src={blog.img} />
        <div className="date">
          <span>
            Blog Date: <span className="result">{blog.date}</span>
          </span>
          <span>
            Topic: <span className="result">{blog.topic}</span>
          </span>
        </div>
        <div className="SingleBlogMain__desc">
          <p>{blog?.description?.slice(0, textSlice)}</p>
          <p>{blog?.description?.slice(textSlice)}</p>{" "}
        </div>
      </div>
      <div className="SingleBlogMain__Element2">
        <h2>Other Blogs</h2>
        {otherBlogs.map((other) => (
          <div className="SingleBlogMain__Element2__items" key={other.id}>
            <Link to={`${ROUTES.BLOG}/${other.id}`}>
              <img src={other.img} />
              <h4>{other.title}</h4>
            </Link>
            <p>{trencate(other.description, 80)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
