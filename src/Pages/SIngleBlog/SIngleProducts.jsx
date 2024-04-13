import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ROUTES from "../../routes";
import "./SIngleProducts.scss";

export default function SIngleBlog() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios("https://dummyjson.com/products" + `/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div className="SingleBlog">
      <Link to={`/${ROUTES.BLOG}`}>Back</Link>
      <div className="SingleBlog__product">
        <img className="SingleBlog__image" src={product.images[0]} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <Link className="SingleBlog__link">Buy</Link>
      </div>
    </div>
  );
}
