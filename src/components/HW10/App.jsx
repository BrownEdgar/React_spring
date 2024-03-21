import React, { useState } from "react";
import "./App.scss";

export default function App() {
  const [info, setInfo] = useState({
    fullName: "Angel Vardanyan",
    info: "Qui excepteur non id qui minim velit commodo do adipisicing officia.",
    team: "MerakiTeam",
    city: "California",
    mail: "Angel@mail.ru",
    img: "./images/girll.jpg",
  });
  return (
    <div className="Card">
      <div className="Card__imgbox">
        <img src={info.img} />
        <h3>
          <i class="bi bi-headphones"></i>
          Focusing
        </h3>
      </div>
      <div className="Card__textbox">
        <h2>{info.fullName}</h2>
        <p>{info.info}</p>
        <ul>
          <li>
            <i class="bi bi-people"></i>
            {info.team}
          </li>
          <li>
            <i class="bi bi-geo-alt"></i>
            {info.city}
          </li>
          <li>
            <i class="bi bi-envelope"></i>
            {info.mail}
          </li>
        </ul>
      </div>
      <div className="Card__list">
        <ul>
          <li>
            <i class="bi bi-facebook"></i>
          </li>
          <li>
            <i class="bi bi-twitter"></i>
          </li>
          <li>
            <i class="bi bi-google"></i>
          </li>
          <li>
            <i class="bi bi-instagram"></i>
          </li>
          <li>
            <i class="bi bi-youtube"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
