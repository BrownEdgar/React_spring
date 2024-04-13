import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.scss";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://dummyjson.com/products?limit=10").then((res) =>
      setProducts(res.data.products)
    );
  }, []);
  return (
    <div className="Products">
      <h1>Our Products</h1>
      <div className="Products__container">
        {products.map((item) => {
          return (
            <div key={item.id} className="Products__item">
              <div className="Products__item-image">
                <img src={item.images[0]} />
              </div>
              <div className="Products__item-info">
                <Link to={`/products/${item.id}`}>
                  <h3>{item.title}</h3>
                  <p>{item.price}$</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
