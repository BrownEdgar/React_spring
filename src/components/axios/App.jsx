import React, { useState, useEffect } from 'react';
import axios from 'axios'
import List from './List/List';
import "./App.scss"


export default function App() {
  const [frazes, setFrazes] = useState([]);

  useEffect(() => [
    axios.get("https://type.fit/api/quotes?_limit=12")
      .then(res => setFrazes(
        res.data.map((elm) =>{
          elm.author = elm.author.split(', type.fit').join('')
          return elm
        })
        ))
  ], [])
  return (
    <div className='App'>
       <h1>Frazes</h1>
      <List data={frazes} />
    </div>
  )
}
