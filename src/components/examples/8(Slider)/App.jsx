import React, { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './App.scss'
import axios from 'axios';
export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios('http://localhost:3000/products')
      .then(res => setProducts(res.data))
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    draggable: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map(elem => {
          return (
            <div key={elem.id} className='slider__item'>
              <img src={elem.poster} />
              <h2>{elem.title}</h2>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}