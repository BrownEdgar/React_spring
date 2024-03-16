import React, { useEffect, useState } from 'react'
import './App.scss'

export default function App() {

  const [obj, setObj] = useState([
    {
      id: 1,
      title: "HTML",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eius! Alias illo distinctio eos et molestias! Illum, rem! Veritatis libero rem error amet temporibus dicta illum possimus numquam cum accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eius! Alias illo distinctio eos et molestias! Illum, rem! Veritatis libero rem error amet temporibus dicta illum possimus numquam cum accusamus.",
      image: "./images/html-elements.jpg"
    },
    {
      id: 2,
      title: "CSS",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eius! Alias illo distinctio eos et molestias! Illum, rem! Veritatis libero rem error amet temporibus dicta illum possimus numquam cum accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eius! Alias illo distinctio eos et molestias! Illum, rem! Veritatis libero rem error amet temporibus dicta illum possimus numquam cum accusamus.",
      image: "./images/css-logo.png"
    },
    {
      id: 3,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eius! Alias illo distinctio eos et molestias! Illum, rem! Veritatis libero rem error amet temporibus dicta illum possimus numquam cum accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eius! Alias illo distinctio eos et molestias! Illum, rem! Veritatis libero rem error amet temporibus dicta illum possimus numquam cum accusamus.",
      image: "./images/JavaScript-logo.png"
    }
  ])

  return(
    <div className="Programming">
      <h1 className='Programming__title'>Categories</h1>
      <div>
        {obj.map((elem) =>{
          return(
            <div className="Programming__item" key={elem.id}>
              <div className="Programming__images">
                <img src={elem.image} alt={elem.title} className='Programming__img'/>
              </div>
              <div>
                <h2 className='Programming__name'>{elem.title}</h2>
                <p>{elem.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
    
  
}
