import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import trencate from "../../helpers/trencate";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL2).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="ProductsMain">
      <div className="ProductsMain__Poster">
        <h1>Our Products</h1>
      </div>
      <div className="ProductsMain__Element">
        {products.map((p) => {
          return (
            <Link to={`${p.id}`}>
              <div key={p.id} className="ProductsMain__Element__content">
                <img src={p.img} alt="" />
                <h2>{p.title}</h2>
                <p>{trencate(p.desc, 80)}</p>
                <h3>${p.price}</h3>

                <div className="buttons">
                  <Link to={`${p.id}`}>
                    Learn More <i className="bi bi-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
