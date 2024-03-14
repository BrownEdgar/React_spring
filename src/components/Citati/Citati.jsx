import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Citati.scss'

export default function Citati() {

  const [citats, setCitats] = useState([])

  useEffect(() =>{
    axios('https://type.fit/api/quotes').then(res =>{
      setCitats(res.data)
    })
  }, [])

  function handleCopy(e, text){
    navigator.clipboard.writeText(text)
    e.target.textContent = "Copied!"
    setTimeout(() => {
      e.target.textContent = 'Copy'
    }, 1500)
  }

  return (
    <div className='Citati'>
      <h1>Quotes for you!</h1>
      {citats.map(elem =>{
        return <article key={elem.id} className='Citati__item'>
          <button className='Citati__copy' onClick={(e) => handleCopy(e, elem.text)}>
            <kbd>Copy</kbd>
          </button>
          <h2 className='Citati__text'>{elem.text}</h2>
          <p className='Citati__author'>DEAR - {elem.author}</p>
        </article>
      })}
    </div>
  )
}
