import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import "./SIngleBlog.scss"
export default function SIngleBlog() {
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  useEffect(() => {
    axios('http://localhost:3000/blogs'+ `/${id}`).then(res=>{
      setBlog(res.data)
    })
  
   
  }, [])
  
  return (
    <div className='SinngleBlog'>
      <img src={blog.image} alt="" />
      <span>{blog.data}</span>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  )
}
