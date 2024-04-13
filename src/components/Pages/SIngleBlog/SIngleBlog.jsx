import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./SIngleBlog.scss";
import ROUTES from "../../../routes";
export default function SIngleBlog() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios("https://fakestoreapi.com/products" + `/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div className="SingleBlog">
      <Link to={`/${ROUTES.BLOG}`}>Back</Link>
      <div className="SingleBlog__product">
        <img className="SingleBlog__image" src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <Link>Buy</Link>
      </div>
    </div>
  );
}
