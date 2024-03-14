import React, { useState, useEffect } from 'react';
import './App.scss'

export default function App() {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    function getData() {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    getData()
  }, [])


  function deleteById(id) {
    const resullt = posts.filter(posts => {
      return posts.id !== id
    })
    setPosts(resullt)
  }

  const delete40 = () => {
    const rsult = posts.filter(elem => {
      return elem.id >= 50 || elem.id < 40
    })
    console.log(rsult)
    setPosts(rsult)
  }

  return (
    <div>
      <h1>Our posts</h1>
      <button onClick={delete40}>remove 40</button>
      <div className="Posts">
        {posts.map(elem => {
          return (
            <div key={elem.id} className='Posts__item'>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <span>{elem.id}</span>
              <button onClick={() => deleteById(elem.id)}>&#10006;</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
