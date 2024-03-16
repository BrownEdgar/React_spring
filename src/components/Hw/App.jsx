import React, { useState } from 'react'
import './App.scss'

export default function App() {

    const [state] = useState([
        {
            id: 1,
            image: './images/1html.jpeg',
            title: 'HTML',
            desc: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web pages appearance/presentation (CSS) or functionality/behavior (JavaScript).'
        },
        {
            id: 2,
            image:'./images/2css.png',
            title: 'CSS',
            desc: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
        },
        {
            id: 3,
            image:'./images/3javascript.jpeg',
            title: 'JavaScript',
            desc: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'
        }
    ])
    return (
        <div className='App'>
            <h1>Categories</h1>
            {
                state.map(elem => {
                    return (
                        <div className='App__item'>
                            <img src={elem.image} alt={elem.title} />
                            <div className='App__info'>
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
