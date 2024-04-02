import React, { useEffect,useState } from 'react'
import { nanoid } from 'nanoid'
import './App.scss'
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, message } = e.target;

    const post = {
      id: nanoid(3),
      title: title.value,
      message: message.value
    }
    axios.post(import.meta.env.VITE_DB_URL, post)
    setPosts((prevPosts) => {
      const newData = [...prevPosts, post];
      return newData;
    });
  }

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL)
      .then(res => setPosts(res.data))
  }, [])


  
  const handleDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_DB_URL}/${id}`)
    setPosts((prevPosts) => {
      const newData = prevPosts.filter(el => el.id !== id)
      return newData
    })
  }
  
  
  return (
    <div className='App'>
        <div className='App__form'>
      <form onSubmit={handleSubmit} className='App__form'>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required/>
        <label htmlFor="message">Post</label>
        <textarea name="message" cols="50" rows="5"></textarea>
        <input type="submit" value="Add Post" />
      </form>
      </div>
      <hr />
      <div className='App__table'>
          {
            posts.map(elem => {
              return (
                <div className='App__content' key={elem.id}>
                  <h2>{elem.title}</h2>
                  <hr />
                  <p>{elem.message}</p>
                    <button onClick={() => handleDelete(elem.id)}>
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
              )
            })
          }
      </div>
    </div>
  )
}