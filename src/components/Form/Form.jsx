import React, { useEffect, useState } from 'react'
import './Form.scss'
import axios from 'axios'
import { nanoid } from 'nanoid'

export default function Form() {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/posts')
    .then(res => setPost(res.data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const {title,body} = e.target

    const post = {
      id: nanoid(5),
      title: title.value,
      body: body.value
    }

    axios.post('http://localhost:3000/posts', post)
    setPost((prevPosts)=>{
      const newPosts = [...prevPosts,post] 
      return newPosts
    })
    e.target.reset()
  }
  
  const handleDelete = (id) => {
    setPost((prevPosts) => {
      const newData = prevPosts.filter(user => user.id != id)
      return newData
    }
  )}
  return (
    <div className='Form'>
      <form onSubmit={handleSubmit} className='Form__form'>
        <input type="title" name='title' required className='Form__title' placeholder='Add Title'/>
        <textarea name="body" cols="30" rows="10" required placeholder='Add Body'></textarea>
        <input type="submit" value='Add' className='Form__add'/>
      </form>
    <div className="Form__body">
      {
        post.map(elem=>{
          return (
            <div className="Form__info">
              <div key={elem.id}>
                <div className="Form__bio">
                  <h2>{elem.title}</h2>
                <p>{elem.body}</p>
                </div>
                <span className='Form__delete'>
                  <button onClick={() => handleDelete(elem.id)}>
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </span>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
)
  }

  


