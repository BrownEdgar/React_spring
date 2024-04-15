import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.scss";
export default function () {
  const [slids, setSlids] = useState([
    {
      id: "1",
      image:
        "https://www.usda.gov/sites/default/files/fs-fall-colors-blog-092118.jpg",
      title: "Authum colars",
      date: "7th Ouctober",
    },
    {
      id: "2",
      image:
        "https://cdn.musicbed.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto:best,h_400,w_400/v1/production/albums/2412",
      title: "The Sky's the limit",
      date: "12th June",
    },
    {
      id: "3",
      image:
        "https://media.rnztools.nz/rnz/image/upload/s--sk5mrfX5--/c_crop,h_2459,w_3935,x_0,y_1792/c_scale,h_2459,w_3935/c_scale,f_auto,q_auto,w_1050/v1693195469/4LR28M5_NZFW23_Pacific_Fusion_Fashion_Show_1N7A1411_jpg",
      title: "Fashion",
      date: "3rd Agust",
    },
    {
      id: "4",
      image:
        "https://lh3.googleusercontent.com/ci/AL18g_TR1icAD1a-k8nj2k10y8etUtFjGSlSC61rMHtVViHwR8lLPEW7sIe4rEWcif3tFMPc_5F9Vg=s1200",
      title: "Art",
      date: "17th May",
    },
    {
      id: "5",
      image: "https://i.redd.it/xlz1ti1hzh251.jpg",
      title: "Fluffy Chick",
      date: "27th April",
    },
  ]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {slids.map((elem) => {
          return (
            <div className="">
              <img src={elem.image} />
              <div className="App__text">
                <h2>{elem.title}</h2>
                <p>{elem.date}</p>
              </div>
            </div>
          );
        })}
      </Slider>

      <a>View more</a>
    </div>
  );
}
