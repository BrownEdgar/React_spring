import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
export default function App() {
  const [data, setData] = useState([]);
  const [CurrentIdnex, setCurrentIdnex] = useState(-1);

  useEffect(() => {
    axios("https:/type.fit/api/quotes").then((res) => {
      setData(res.data);
      setCurrentIdnex(0);
    });
  }, []);
  const next = () => {
    setCurrentIdnex(CurrentIdnex < data.length - 1 ? CurrentIdnex + 1 : 0);
  };
  const prev = () => {
    setCurrentIdnex(CurrentIdnex > 0 ? CurrentIdnex - 1 : data.length - 1);
  };
  const like = (index) => {
    const resalt = data.map((elem, i) => {
        if (i ==index) {
            
            elem.like = !elem.like;
      }
      return elem;
    });
    setData(resalt);
  };
  return (
    <div className="App">
      <button className="btn btn__prev" onClick={prev}>
        <i className="bi bi-caret-left"></i>
      </button>

      <div className="App__Quote">
        {CurrentIdnex >= 0 ? (
          <div>
            <h2>{data[CurrentIdnex].text}</h2>
            <p>
              <span onClick={() => like(CurrentIdnex)}>
                {data[CurrentIdnex]?.like ? (
                  <i className="bi bi-hand-thumbs-up"></i>
                ) : (
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                )}
              </span>
              {data[CurrentIdnex].author}
            </p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <button className="btn btn__right" onClick={next}>
        <i className="bi bi-caret-right"></i>
      </button>
    </div>
  );
}
