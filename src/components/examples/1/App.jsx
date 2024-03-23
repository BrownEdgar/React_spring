<<<<<<< HEAD
import React, {useState} from 'react'
import './App.scss'


export default function App() {
    const [interior] = useState([
        {
            id: 1,
            title: 'Simplicity',
            description: 'Explore Now',
            image: './images/interior_1.jpg'
        },
        {
            id: 2,
            title: 'Your Space',
            description: 'Shop Accessories',
            image: './images/interior_2.jpg'

        },
        {
            id: 3,
            title: 'Loft Chair',
            description: 'Shop Now',
            image: './images/interior_3.jpg'
        }
    ])
    return (
        <div className='App'>
            {
                interior.map(elem => {
                    return(
                        <div className='App__item' key={elem.id}>
                            <img src={elem.image} alt={elem.title} />
                            <div className='App__info'>
                                <h2 className='App__title'>{elem.title}</h2>
                                <p>{elem.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
=======
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
>>>>>>> 7491a16e31f3b3f07e35f50b86581cb01f50b6af
}
