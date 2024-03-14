import React from 'react'
import './List.scss'

export default function List({data}) {

    const slicedData = data.slice(0, 10)

    const handleCopy = (e, text) => {
        navigator.clipboard.writeText(text)
        e.target.innerText = 'Copied'
        setTimeout(() => {
            e.target.innerText = 'Copy'
        }, 1000);
    }
    return (
        <div className='List'>
            {
                slicedData.map(elem => {
                const author = elem.author.split(',')[0]
                    return (
                        <article key={elem.id} className='List__item'> 
                            <button className='List__copyBtn' onClick={(e) => handleCopy(e, elem.title)}>
                                <kbd>Copy</kbd>
                            </button>
                            <p>" {elem.text} "</p>
                            <h2 key={elem.id}>- {author}</h2>
                        </article>
                    )
                }
            )}
        </div>
    )
}
