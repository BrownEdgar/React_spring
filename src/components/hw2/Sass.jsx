import React, { useState } from 'react'
import './Sass.scss'


export default function Sass() {
    const [promo] = useState([
        {
          id: 1,
          title: "Simplicty",
          button: "Explore Now",
          image: './images/photo1.jpg'
        },
        {
          id: 2,
          title: "Your Space",
          button: "Shop Accessories",
          image: './images/photo2.jpg'
        },
        {
          id: 3,
          title: "Loft Chair",
          button: "Shop Now",
          image: './images/photo3.jpg'
        },
      ])
    
      return (
        <div className='Sass'>
    
          {
            promo.map(elem => {
              return (
                <div className='Sass__item' key={elem.id}>
                  <img src={elem.image} alt={elem.title} />
                  <div className='Sass__info'>
                    <h2 className='Sass__title'>{elem.title}</h2>
                    <a href='#' > {elem.button}</a>
                    <hr/>
                  </div>
                </div>
              )
            })
          }
    
        </div>
      )
    }

