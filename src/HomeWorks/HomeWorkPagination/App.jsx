import React, { useState, useEffect } from "react";
import Pagination from "./Pagination/Pagination";
import axios from "axios";
import "./App.scss";

export default function App() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/comments?_limit=100`).then(
      (res) =>
        setComments(res.data.slice(page * perPage - perPage, page * perPage))
    );
  }, [page]);
  const changePage = (i) => {
    setPage(i);
  };
  return (
    <div className="App">
      {comments.map((item) => {
        return (
          <div className="App__item" key={item.id}>
            <h3 className="App__title">
              {item.id}. {item.name}
            </h3>
            <p className="App__text">{item.body}</p>
            <span>{item.email}</span>
          </div>
        );
      })}
      <Pagination perPage={perPage} changePage={changePage} />
    </div>
  );
}
