import React from 'react'
import './List.scss'

export default function List({ data }) {
    const handleCopy = (e,text) => {
        navigator.clipboard.writeText(text)
        e.target.innerText = 'Copied!'
        setTimeout(() => {
            e.target.innerText = 'Copy!'
        }, 1000);
    }
  return (
    <div className='List'>
        {
            data.map((elem) => {
                return (
                    <article key={elem.id} className='List__item'>
                        <p>{elem.text}</p>
                        <h2>{elem.author}</h2>
                        <button className='List__copyBtn' onClick={(e) => handleCopy(e, elem.text)}>
                            <kbd>Copy!</kbd>
                        </button>
                    </article>
                )
            })
        }
    </div>
  )
}
