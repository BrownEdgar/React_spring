import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './App.scss'
function App() {
    const [quotes, setQuotes] = useState([]);
    
    useEffect(() => {
        axios('https://type.fit/api/quotes').then(res => {
            setQuotes(processQuotes(res.data));
          });
        }, []);

    function processQuotes(quotes) {
        return quotes.map(quote => {
            quote.author = quote.author.replace(', type.fit', '');
          return quote;
        });
      }
  
  function handleCopy(e, text) {
    navigator.clipboard.writeText(text)
    e.target.innerText ="Copied!"
    setTimeout(() => {
        e.target.innerText ="Copy"

    }, 2000);
  }
    return (
      <div className='Quotes'>
        <h1 style={{textAlign:'center',margin:"50px 0px"}}>Famous Quotes</h1>
        {quotes.map(elem => {
          return ( 
            <article key={elem.id} className='Quotes__item'>
            <button className='Quotes__Btn' onClick={(e) => handleCopy(e, elem.text)}>
              <kbd>Copy</kbd>
            </button>
            <h2>{elem.text}</h2>
            <p>~{elem.author}</p>
          </article>
          );
        })}
      </div>
    );
  }
  
export default App