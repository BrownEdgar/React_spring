import { Link, useParams } from "react-router-dom";
import "./SingleProduct.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ROUTES from "../../routes";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_DB_URL2}/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL2, {
      params: {
        _limit: 3,
      },
    }).then((res) => setOtherProducts(res.data));
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="singleProd">
      <div>
        <Link to={`/${ROUTES.PRODUCTS}`}>
          <i className="bi bi-chevron-left"></i>
          All Products
        </Link>
      </div>
      <div className="singleProd__Elem">
        <div className="img-part">
          <img src={product.img} alt="" />
        </div>
        <div className="info">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <p>
            {product.color && product.color.length > 0 ? " Select Color:" : ""}
          </p>
          <ul>
            {product.color &&
              product.color.length > 0 &&
              product.color.map((color, index) => <li key={index}>{color}</li>)}
          </ul>
          <p>
            {product.storage && product.storage.length > 0
              ? "Select Storage:"
              : ""}
          </p>
          <ul>
            {product.storage &&
              product.storage.length > 0 &&
              product.storage.map((color, index) => (
                <li key={index}>{color}</li>
              ))}
          </ul>
          <h2>${product.price}</h2>
          <Link to="/">
            <button>Buy Now</button>
          </Link>
        </div>
      </div>
      <div className="other-products">
        <h2>Other Products</h2>
        <div className="other-products-list">
          {otherProducts.map((otherProduct) => (
            <div key={otherProduct.id} className="other-product">
              <img src={otherProduct.img} alt={otherProduct.title} />
              <h3>{otherProduct.title}</h3>
              <p>${otherProduct.price}</p>
              <Link to={`/products/${otherProduct.id}`} onClick={scrollToTop}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
