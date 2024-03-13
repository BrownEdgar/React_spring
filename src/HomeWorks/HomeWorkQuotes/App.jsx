import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./App.scss";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [activeSlide, setActiveSlide] = useState(1);
  useEffect(() => {
    function getData() {
      axios("https://type.fit/api/quotes").then((res) =>
        setQuotes(
          res.data.map((item, ind) => {
            item.author = item.author.split(",")[0];
            item.id = ind + 1;
            return item;
          })
        )
      );
    }
    getData();
  }, []);

  const handleCopy = (e, text) => {
    navigator.clipboard.writeText(text);
    e.target.innerText = "Copied";
    setTimeout(() => {
      e.target.innerText = "Copy";
    }, 1000);
  };

  const leftSlide = () => {
    if (activeSlide === 1) {
      return;
    }
    console.log(activeSlide);
    setActiveSlide(activeSlide - 1);
  };

  const rightSlide = () => {
    if (activeSlide === quotes.length) {
      return;
    }

    setActiveSlide(activeSlide + 1);
  };

  return (
    <div className="App">
      <h1 className="App__title">My favorite quotes</h1>
      {quotes.map((item) => {
        if (item.id === activeSlide) {
          return (
            <div key={item.id} className="App__item">
              <q className="App__quote">{item.text}</q>
              <p className="App__author">{item.author}</p>
              <button
                onClick={(e) => handleCopy(e, item.text)}
                className="App__copyBtn"
              >
                <kbd>Copy</kbd>
              </button>
            </div>
          );
        }
      })}
      <div className="App__actions">
        <button onClick={leftSlide} disabled={activeSlide === 1}>
          <FaArrowLeft className="App__icon" />
        </button>
        <span>
          {activeSlide}/{quotes.length}
        </span>
        <button onClick={rightSlide} disabled={activeSlide === quotes.length}>
          <FaArrowRight className="App__icon" />
        </button>
      </div>
    </div>
  );
}
