import React, { useState, useEffect } from 'react';

import './SingleBlog.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import ROUTES from '../../routes';

export default function SingleBlog() {
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  const [otherBlogs, setOtherBlogs] = useState([])
  console.log(otherBlogs)
  const textSlice = blog ? Math.ceil(blog?.desc?.length / 2) : 0
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + `/${id}`)
      .then(res => setBlog(res.data))
  }, [])

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL, {
      params: {
        _limit: 6
      }
    })
      .then(res => setOtherBlogs(res.data))
  }, [])
  return (
    <div className='SingleBlog'>
      <div className="SingleBlog__Element">
        <div>
          <Link to={`/${ROUTES.BLOG}`}>All Blogs</Link>
        </div>
        <h1 className='title'>{blog.title}</h1>
        <img src={blog.images} />
        <div className='SingleBlog__desc'>
          <p>{blog?.desc?.slice(0, textSlice)}</p>
          <p>{blog?.desc?.slice(textSlice)}</p>
        </div>
      </div>
    </div>
  )
}
