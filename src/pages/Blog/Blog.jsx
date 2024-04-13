import React, { useState, useEffect } from 'react';
import './Blog.scss'
import axios from 'axios'
import trancate from '../../helpers/truncate';
import { Link } from 'react-router-dom'

export default function Blog() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/blogs')
    .then(res => setBlogs(res.data))
  },[])

  return (
    <div className='Blog'>
      <div className="Blog__photo">
        
      </div>
      <div className="Blog__wrapper">
        {blogs.map(elem => {
          return (
            <div key={elem.id}>
              <img src={elem.images}/>
              <div className='Blog__info'>
                <p>{elem.date}</p>
                <h2>{trancate(elem.title, 80)}</h2>
                <Link to={`${elem.id}`}>{elem.btn}</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
