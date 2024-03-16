import React, { useState} from 'react';
import "./App.scss"

export default function App() {
    const[info] = useState([
        {
            id: 1,
            image: "./images/html.jpg",
            title: "HTML",
            desc: "HTML (from the English  HyperText Markup Language  - “ hypertext markup language”) is a standardized hypertext markup language for documents for viewing web pages in a browser . Web browsers receive an HTML document from the server via HTTP / HTTPS protocols or open it from a local disk, then interpret the code into an interface that will be displayed on the monitor screen."
        },
        {
            id: 2,
            image: "./images/CSS.avif",
            title: "CSS",
            desc: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        },
        {
            id: 3,
            image: "./images/JS.jpg",
            title: "JS",
            desc: "JavaScript is a multi-paradigm programming language . Supports object-oriented , imperative and functional styles. It is an implementation of the ECMAScript specification. JavaScript is commonly used as an embedded language for programmatically accessing application objects . It is most widely used in browsers as a scripting language for adding interactivity to web pages"
        }
    ])
  return (
    <div className='App'>
        <h1>Categories</h1>
        {
            info.map((elm) =>{
                return (
                    <div className='App__item'>
                        <img src={elm.image} />
                        <div className='App__item-info'>
                            <h2>{elm.title}</h2>
                            <p>{elm.desc}</p>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}
