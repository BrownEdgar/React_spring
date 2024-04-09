import React, { useState, useEffect } from 'react';

import './Blog.scss'
import axios from 'axios';
import trancate from '../../helpers/truncate';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL)
      .then(res => setBlogs(res.data))
  }, [])

  return (
    <div className='Blog'>
      <div className="Blog__poster">
        <h1>Blog page</h1>
      </div>
      <div className="Blog__wrapper">
        {blogs.map(elem => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              <img src={elem.images} />
              <div className='Blog__info'>
                <h2>{trancate(elem.title, 80)}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
