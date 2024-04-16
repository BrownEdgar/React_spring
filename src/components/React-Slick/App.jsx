import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./App.scss";
export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:8000/products").then((res) =>
      setProducts(res.data)
    );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    draggable: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <div>
      <h1>Our Products</h1>
      <Slider {...settings}>
        {products.map((el) => {
          return (
            <div key={el.id} className="slider-items">
              <img src={el.img} />
              <h2>{el.title}</h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
