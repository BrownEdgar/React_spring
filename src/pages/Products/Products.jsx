import React, { useState, useEffect } from 'react';
import './Products.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SingleProducts from '../SingleProducts/SingleProducts';

export default function Blog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/products')
    .then(res => setProducts(res.data))
  },[])

  return (
    <div className='Product'>
        {products.map(elem => {
          return (
            <div key={elem.id} className='Product__wrapper'>
              <h2>{elem.title}</h2>
              <div className='Product__info'>
                <img src={elem.poster}/>
                <p className='Product__body1'>{elem.body}</p>
                <p className='Product__body2'>{elem.prise}</p>
                <p className='Product__body3'>{elem.createdAt}</p>  
              </div>
              <Link to={`${elem.id}`} className='Product__buy'>Buy Now</Link>
            </div>
          )
        })}
    </div>
  )
}
