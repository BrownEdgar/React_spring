import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagineton from "../../Pagineton/Pagineton";
import classNames from "classNames";
import "./App.scss";

export default function app() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(4);
  useEffect(() => {
    axios("https://dummyjson.com/quotes", {
      params: {
        limit: perPage,
        skip: page * perPage - perPage,
      },
    }).then((res) => setdata(res.data.quotes));
  }, [page, perPage]);
  const changePage = (n) => {
    setPage(n);
  };

  return (
    <div className="App">
      <div className="App__quotes">
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <span>{elem.id}</span>
              <h2
                className={classNames({
                  "App__title-small": elem.quote.length > 80,
                })}
              >
                {elem.quote}
              </h2>
              <p>{elem.author}</p>
            </div>
          );
        })}
      </div>
      <Pagineton
        total={100}
        perPage={perPage}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}
