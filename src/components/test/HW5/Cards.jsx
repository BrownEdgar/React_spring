import React, { useState } from 'react'
import './Cards.scss'

export default function Cards() {
    const [cards] = useState([
        {
            id:1,
            img:"./images/1.jpg",
            title:"Simplicity",
            info:"Explore Now"
        },
        {
            id:2,
            img:"./images/2.jpg",
            title:"Yous Space",
            info:"Shop Accessories"
        },
        {
            id:3,
            img:"./images/3.jpg",
            title:"Loft Chair",
            info:"Shop Now"
        },
    ])
  return (
    <div className='Cards'>
      {cards.map(elem=>{
        return (
            <div className='Cards__item'>
                <img src={elem.img} alt={elem.title} />
                <div className="Cards__info">
                <h2 className='Cards__title'>{elem.title}</h2>
                <p className='Cards__text'>{elem.info}</p>
                </div>
            </div>
        )
      })}
    </div>
  )
}
