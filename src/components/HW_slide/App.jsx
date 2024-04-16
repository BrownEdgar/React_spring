import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

export default function App() {
  const [nature, setNature] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => setNature(res.data));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {nature.map((elem) => {
          return (
            <div key={elem.id} className="App__slider__item">
              <img src={elem.img} />
              <div className="App__slider__item-info">
                <h2>{elem.name}</h2>
                <span>{elem.date}</span>
              </div>
            </div>
          );
        })}
      </Slider>
      <button>View more</button>
    </div>
  );
}
