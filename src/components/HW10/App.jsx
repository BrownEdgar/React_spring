import React, { useState, useEffect } from 'react';
import "./App.scss";
export default function App() {
    const [cardInfo] = useState({
        fullName:'Patterson johnson',
        info:"Full Stack & UI/UX Designer, love hip hop music Author of Bulding UI.",
        team:'Marekiteam',
        city:"California",
        email:"patterson@exemple.com",
        image:"./images/girl.jpg"
})


  return (
    <div className='Card'>
      <div className="Card__image">
      <img src={cardInfo.image} alt="" />
      <h3 className="Card__status"><i class="bi bi-headphones"></i>Focusing</h3>
      </div>
      <div className="Card__info">
      <h2 className="Card__title">{cardInfo.fullName}</h2>
      <p className="Card__aboutMe">{cardInfo.info}</p>
      <div className="Card__list">
        <ul>
            <li><i class="bi bi-people-fill"></i>{cardInfo.team}</li>
            <li><i class="bi bi-geo-alt-fill"></i>{cardInfo.city}</li>
            <li><i class="bi bi-envelope-at-fill"></i>{cardInfo.email}</li>
        </ul>
      </div>
      </div>
      <div className="Card__contact">
      <ul>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-google"></i>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
          </ul>
      </div>
    </div>
  )
}
