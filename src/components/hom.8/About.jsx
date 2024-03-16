import React, { useState } from 'react';
import './About.scss'


export default function About() {
    const [state] = useState([
        {
            id: 1,
            image: './images/html.avif',
            title: 'HTML',
            desc: 'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
        },
        {
            id: 2,
            image: './images/css.jpg',
            title: 'CSS',
            desc: 'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
        },
        {
            id: 3,
            image: './images/js.png',
            title: 'JavaScript',
            desc: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'
        }
    ])


    return (
        <div className='About'>
            <h1>Categories</h1>
            {
                state.map((elem) => {
                    return (
                        <div className='About__item'>
                            <img src={elem.image} alt="" />
                            <div className='About__item-content'>
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

