import React, { useState } from 'react'
import './App.scss'

export default function App() {
  const [cities] = useState([
    {
      id: 1,
      title: "California",
      properties: 23,
      image: './images/new_york.jpg'
    },
    {
      id: 2,
      title: "New York",
      properties: 23,
      image: './images/new_york.jpg'
    },
    {
      id: 3,
      title: "San Francisco",
      properties: 23,
      image: './images/new_york.jpg'
    },
    {
      id: 4,
      title: "Texas",
      properties: 23,
      image: './images/new_york.jpg'
    },
    {
      id: 5,
      title: "New Orleans",
      properties: 23,
      image: './images/new_york.jpg'
    },
  ])

  return (
    <div className='App'>

      {
        cities.map(elem => {
          return (
            <div className='App__item' key={elem.id}>
              <img src={elem.image} alt={elem.title} />
              <div className='App__info'>
                <h2 className='App__title'>{elem.title}</h2>
                <p> {elem.properties} properties</p>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
