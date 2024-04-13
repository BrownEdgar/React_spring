import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./ProductsSlide.scss";

export default function ProductsSlide(id) {
  const [otherProducts, setOtherProducts] = useState(null);
  useEffect(() => {
    axios(`https://dummyjson.com/products?limit=10`).then((res) =>
      setOtherProducts(res.data.products.filter((item) => item.id !== id))
    );
  }, []);
  console.log(otherProducts);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <div className="ProductsSlide">
      <Slider {...settings}>
        {otherProducts
          ? otherProducts.map((item) => {
              return (
                <div key={item.id} className="ProductSlide__item">
                  <Link to={`/products/${item.id}`}>
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                  </Link>
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
}
