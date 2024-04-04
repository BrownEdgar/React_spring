import React, { useEffect, useState } from 'react'
import './Form.scss'
import axios from 'axios'
import {nanoid} from 'nanoid'
import Form2 from '../Form2/Form2'

export default function Form() {
  const [posts, setPosts] = useState([])
    // ----------------
  function getPosts() {
    axios('http://localhost:3000/posts').then(res => setPosts(res.data))
  }
    // ----------------
  useEffect(() => {
    getPosts()
  },[])
    // ----------------
  const handleSubmit = (values, {resetForm}) => {
    resetForm()
    const post = {
        id: nanoid(5),
        ...values
    }
    // ---------------
  axios.post('http://localhost:3000/posts', post)
    setPosts((prevPosts)=>{
      const newPosts = [...prevPosts,post] 
      return newPosts
  })
    e.target.reset()
  }
    // ---------------
  const handleDelete = (id) => {
    axios({
        baseURL: 'http://localhost:3000/posts',
        method: 'DELETE',
        url: id
    }).then(getPosts)
  }
  return (
    <div className="Form">
        <Form2 onSubmit={handleSubmit}/>
        <div className="Form__bio">
            {
                posts.map(elem => {
                    return(
                        <div className="Form__info">
                            <div key={elem.id} className='Form__items'>
                              <div className="Form__content">
                                <h2>Name: {elem.title}</h2>
                                <i>Post: {elem.body}</i>
                              </div>
                                <div className="Form__delete">
                                  <span className='Form__info__delete'>
                                    <button onClick={() => handleDelete(elem.id)}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                  </span>
                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
