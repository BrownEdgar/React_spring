import React, { useState, useEffect } from 'react';
import './About.scss'
import axios from 'axios'
import List from './List/List';


export default function About() {
    const [frazes,setFrazes] = useState([])

    useEffect(() => {
        axios('https://type.fit/api/quotes?_limit=12')
          .then((res) => setFrazes(res.data.map((elem) => {
            elem.author = elem.author.split(", type.fit").join("")
            return elem;
        })))
    },[])

  return (
    <div className='About'>
        <h1>Frazes</h1>
        <List data={frazes} />
    </div>
  )
}
