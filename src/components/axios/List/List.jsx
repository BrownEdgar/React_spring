import React from 'react'
import './List.scss'

export default function List({ data }) {

  const handleCopy = (e, text) => {
    navigator.clipboard.writeText(text)
    e.target.innerText = 'Copied!'
    setTimeout(() => {
      e.target.innerText = 'Copy!'
    }, 1000)

  }
  return (
    <div className='List'>
      {
        data.map(elem => {
          return (
            <article key={elem.id} className='List__item'>
              <button className='List__copyBtn' onClick={(e) => handleCopy(e, elem.title)}>
                <kbd>Copy</kbd>
              </button>
              <h2>{elem.title}</h2>
            </article>
          )
        })
      }
    </div>
  )
}
