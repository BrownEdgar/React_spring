import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'
function App() {
const [state, setstate] = useState([
    {
        id:1,
        img : "./images/html.png",
        title: 'HTML',
        desc : `HTML (HyperText Markup Language) is the core building block of all websites on the internet. It's the standard markup language for creating web pages.`
    },
    {
        id:2,
        img : "./images/css.png",
        title: 'CSS',
        desc : `CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. It is a core part of the web that lets you create stunning designs, interactive elements, and animations.`
    },
    {
        id:3,
        img : "./images/jscript.png",
        title: 'JavaScript',
        desc : `JavaScript is one of the world's most popular programming languages that powers every website on the web, including this very page you are looking at right now.`
    },
])
useEffect(() => {
  setstate(state)

}, [])

  return (
    <div className='imgBox'>
        <h1>Categories</h1>
        
        {
            state.map(elem =>{
                return(
                    <div className='imgBox__item' key={elem.id}>
                        <img src={elem.img} alt="alt" />
                        <div className='imgBox__text'>
                            <h2>{elem.title}</h2>
                            <p>{elem.desc}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default App