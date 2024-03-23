import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagineton from "../Pagineton/Pagineton";
import "./App.scss";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [Perpage, setPerPage] = useState(1);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments", {
      params: {
        _start: Perpage * page - Perpage,
        _limit: Perpage,
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page,Perpage]);


  const changePage = (number) =>{
    setPage(number)
    console.log(data);
    
   }


  return (
    <div className="App">
      {data.map((comments) => {
        return (
          <div className="App__Comments" key={comments.id}>
            <h2 className="App__title"><span>{comments.id}.</span>{comments.name}</h2>
            <p>{comments.body}</p>
          </div>
        );
      })}

      <Pagineton  total={30} perPage={Perpage}  page={page} changePage={changePage} />
    </div>
  );
}
