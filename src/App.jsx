import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

export default function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://jsonplaceholder.typicode.com/posts`);
      setData(result.data);
    };
    fetchData();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="App">
      <h1>Data from External Source:</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <h1 key={item.id}>
            {item.id} {item.title}
          </h1>
        ))}
      </Slider>
    </div>
  );
}
