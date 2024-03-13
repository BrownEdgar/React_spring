import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://type.fit/api/quotes").then((res) => {
      setData(
        res.map((elem) => {
          elem.author = elem.author.split(", type.fit").join("");
          return elem;
        })
      );
    });
  }, []);

  const handleCopy = (e, text, author) => {
    navigator.clipboard.writeText(`${text} ${author}`);
    e.target.innerText = "Copied!";
    setTimeout(() => {
      e.target.innerText = "Copy!";
    }, 1000);
  };

  return (
    <div className="App">
      {data.map((elem) => {
        return (
          <article className="App__item">
            <button
              className="App__copyBtn"
              onClick={(e) => handleCopy(e, elem.text, elem.author)}
            >
              <kbd>Copy</kbd>
            </button>
            <h2 className="App__text">{elem.text}</h2>
            <p className="App__author">{elem.author}</p>
          </article>
        );
      })}
    </div>
  );
}
