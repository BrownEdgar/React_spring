import React, { useState } from 'react'
import "./Catalog.scss"

export default function Catalog() {
    const [items, setItems] = useState([
        {
            id:1,
            img:"./images/interier1.jpg",
            title:"Simplicity",
            info:"Explore Now"
        },
        {
            id:2,
            img:"./images/interier2.jpg",
            title:"Yous Space",
            info:"Shop Accessories"
        },
        {
            id:3,
            img:"./images/interier3.jpg",
            title:"Loft Chair",
            info:"Shop Now"
        },
    ])
  return (
    <div className='Catalog'>
      {items.map(elem=>{
        return (
            <div className='Catalog__item' key={elem.id}>
                <img src={elem.img} alt={elem.title} />
                <div className="Catalog__info">
                <h2 className='Catalog__title'>{elem.title}</h2>
                <p className='Catalog__text'>{elem.info}</p>
                </div>
            </div>
        )
      })}
    </div>
  )
}
