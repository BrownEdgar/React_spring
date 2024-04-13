import React, { useState, useEffect } from 'react';
import './SingleBlog.scss'
import {Link, useParams} from 'react-router-dom'
import ROUTES from '../../routes'
import axios from 'axios'

export default function SingleBlog() {
    const {id} = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        axios('http://localhost:3000/blogs' + `/${id}`)
        .then(res => setBlog(res.data))
      },[])

  return (
    <div className="SingleBlog">
        <div className="SingleBlog__Element">
            <h1>{blog.title}</h1>
            <img src={blog.images}/>
            <div className='SingleBlog__desc'>
                <p>{blog.desc}</p>
            </div>
            <div>
                <Link to={ROUTES.BLOG}>ALL BLOGS</Link>
            </div>
        </div>
    </div>
  )
}
