import React, { useState } from 'react'
import './About.scss'

export default function About() {
  const [shop] = useState([
    {
      id: 1,
      title: "Simplicity",
      text: 'Explore Now',
      images: './Images/photo-1.avif'
    },
    {
      id: 2,
      title: "Your Spacey",
      text: 'Shop Accessories',
      images: './Images/photo-2.avif'
    },
    {
      id: 3,
      title: "Loft Chair",
      text: 'Shop Now',
      images: './Images/photo-3.avif'
    },
  ])
  return (
    <div className='About'>
      {
        shop.map(elm => {
          return(
            <div className='About__item' key={elm.id}>
              <img src={elm.images} alt={elm.title} />
              <div className='Abot__info'>
                <h2 className='About__title'>{elm.title}</h2>
                <p className='About__text'>{elm.text}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
