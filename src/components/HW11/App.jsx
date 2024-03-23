import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Pagineton from "../Pagineton/Pagineton";

export default function App() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(4)
    const [perPage, setPerPage] = useState(1)
    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/comments`, {
        params:{
            _start:page * perPage - perPage,
            _limit:perPage,
        }
      }).then(res=>{
        setData(res.data[0])})
      
    
    //   console.log(page * perPage - perPage);
    }, [page,perPage])
    console.log(data);

    const changePage = (page) =>{ 
        setPage(page)
    }
  return (
    <div className="App">
        <div className="App__comment">
            <h2 className="App__title">{data.id} {data.name}</h2>
            <p className="App__text">{data.body}</p>
            <p className="App__author">{data.email}</p>
        </div>
        <Pagineton
        total={36}
        perPage={perPage}
        page={page}
        changePage={changePage}/>
    </div>
  )
}
