import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsSlide from "../../components/ProductsSlide/ProductsSlide";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.scss";

export default function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 500,
    cssEase: "linear",
  };

  return (
    <div className="Product">
      <div className="Product__container">
        <Slider className="Product__slider" {...settings}>
          {product
            ? product.images.map((item, index) => {
                return (
                  <div key={index} className="Product__image">
                    <img src={item} />
                  </div>
                );
              })
            : null}
        </Slider>
        {product ? (
          <div className="Product__info">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price : {product.price}$</p>
            <p>Rating : {product.rating}</p>
            <p>Stock : {product.stock}</p>
            <p>Discount Percentage : {product.discountPercentage}% </p>
          </div>
        ) : null}
      </div>
      <div className="divider"></div>
      <div className="Product__otherProducts">
        <h3>Our other products</h3>
        <ProductsSlide id={id} />
      </div>
    </div>
  );
}
