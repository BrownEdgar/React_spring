import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../../routes';
import moment from 'moment';
import axios from 'axios';
import WhateverIcon from '../../assets/clapicon.svg?react'

import './SingleBlog.scss'

export default function SingleBlog() {
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  const [otherBlogs, setOtherBlogs] = useState([])
  console.log(otherBlogs)
  const textSlice = blog ? Math.ceil(blog?.desc?.length / 2) : 0
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + `/${id}`)
      .then(res => setBlog(res.data))
  }, [id])

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + '?_sort=claps')
      .then(res => setOtherBlogs(res.data.slice(-6)))
  }, [])

  const handleClaps = () => {
    const data = {
      claps: (blog.claps || 0) + 1
    }
    axios.patch(import.meta.env.VITE_DB_URL + `/${id}`, data)
      .then(res => setBlog(res.data))
  }

  return (
    <div className='SingleBlog'>
      <div className="SingleBlog__Element">
        <div>
          <Link to={`/${ROUTES.BLOG}`}>All Blogs</Link>
        </div>
        <h1 className='title'>{blog.title}</h1>
        <img src={blog.poster} />
        <div className='SingleBlog__desc'>
          {blog?.description?.map((elem, index) => {
            return (
              <p key={index}>{elem}</p>
            )
          })}
          <ul className='SingleBlog__desc-list'>
            {blog?.list?.map((elem, index) => {
              return (
                <li key={index}>{elem}</li>
              )
            })}
          </ul>
        </div>
        <hr />
        <div className='SingleBlog__footer'>
          <button className='SingleBlog__footer-icon' onClick={handleClaps}>
            <WhateverIcon />
          </button>
          <p>{blog.claps || 0}</p>
        </div>
      </div>
      <div className="SingleBlog__topList">
        {
          otherBlogs.map(elem => {
            return (
              <div key={elem.id}>
                <Link to={`/blog/${elem.id}`}>
                  <img src={elem.poster} />
                </Link>
                <div>
                  <h2>{elem.title}</h2>
                  <p>
                    <i className="bi bi-calendar2"></i>
                    {moment(elem.createdAt).format('DD | MMM | YYYY')}
                  </p>
                  <p>

                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
