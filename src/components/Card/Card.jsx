import React, { useState } from 'react'
import './Card.scss'

export default function Card() {
  const [card] = useState({
    NameFName: 'Patterson Johnson',
    bio:'Full Stack & UI/UX Designer, love hip hop music Author of Bulding UI.',
    work: 'Marekiteam',
    live: 'California',
    email:'patterson@exemple.com',
    image:"./images/man.jpg"
  })

  return(
    <div className="Card">
      <div className="Card__image">
        <img src={card.image} alt="" />
        <h1><i className="bi bi-headphones"></i> Focusing</h1>
      </div>

      <div className="Card__bio">
        <div className="Card__info">
          <h2>{card.NameFName}</h2>
          <p>{card.bio}</p>
        </div>

        <div className="Card__li">
          <ul>
            <li><i className="bi bi-people-fill"></i> {card.work}</li>
            <li><i className="bi bi-geo-alt-fill"></i> {card.live}</li>
            <li><i className="bi bi-envelope-fill"></i> {card.email}</li>
          </ul>
        </div>
      </div>
      


    </div>
  )
}
