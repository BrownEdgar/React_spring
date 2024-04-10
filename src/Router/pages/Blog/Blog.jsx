import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Blog.scss";

export default function Blog() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3000/posts/${id}`).then((res) => setBlog(res.data));
  }, []);

  return (
    <div className="Blog">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt="" />
      <p className="Blog__desc">{blog.desc}</p>
      <p className="Blog__desc">{blog.desc}</p>
      <p className="Blog__date">{blog.date}</p>
    </div>
  );
}
