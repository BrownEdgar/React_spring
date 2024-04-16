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
        "https://www.monstertreeservice.com/cms/thumbnails/24/1080x540/images/articles/MTS_TreesWithMostVibrantFallColors_Sept23_20230810.jpg",
      title: "Authum colars",
      date: "7th Ouctober",
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/originals/9b/41/0b/9b410bae43b081a974226b877afd04d3.jpg",
      title: "The Sky's the limit",
      date: "12th June",
    },
    {
      id: "3",
      image:
        "https://www.realsimple.com/thmb/yla86Nr8GjRXe_9IyADQ638gPrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashion-trends-GettyImages-1457816153-d2982e954afe4b42bf5587f087da90d4.jpg",
      title: "Fashion",
      date: "3rd Agust",
    },
    {
      id: "4",
      image:
        "https://www.sciencefriday.com/wp-content/uploads/2023/06/brain-art.jpg",
      title: "Art",
      date: "17th May",
    },
    {
      id: "5",
      image:
        "https://i0.wp.com/craftthyme.com/wp-content/uploads/2015/05/chick-easter-egger.jpg",
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
    centerMode: true,
    centerPadding: "60px",
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
    </div>
  );
}
