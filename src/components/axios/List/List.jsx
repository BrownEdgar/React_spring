import React from 'react'
import "./List.scss"

export default function List({ data }) {
    const handleCopy = (e, text) => {
        navigator.clipboard.writeText(text)
        e.target.innerText = "Copied!"
        setTimeout(() => {
            e.target.innerText = "Copy!"
        }, 1000)
    }
    console.log(data);
    
    return (
        <div className='List'>
            {
                data.map((elm) => {
                    return (
                        <article key={elm.id} className='List__item'>
                            <p>&quot; {elm.text} &quot;</p>
                            <h2>&lt; {elm.author} &gt;</h2>
                            <button className='List__copyBtn' onClick={(e) => handleCopy(e, elm.text)}>
                                <kbd>Copy</kbd>
                            </button>
                        </article>
                    )
                })
            }
        </div>
    )
}
