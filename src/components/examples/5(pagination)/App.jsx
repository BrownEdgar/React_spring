import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import axios from 'axios';
import './App.scss'
import Pagineton from '../../Pagination/Pagination';

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/comments', {
      params: {
        _limit: perPage,
        _start: (page * perPage) - perPage
      }
    }).then(res => setData(res.data))
    console.log(data);
  }, [page, perPage])

  const changePage = (n) => setPage(n)

  return (
    <div className='App'>
      <div className="App__Quotes">
        {
          data.map(elem => {
            return (
              <div key={elem.id}>
                <span>{elem.id}</span>
                <h2 className={classNames({
                //   "App__title-sm": elem.quote.length > 80
                })}>
                  {elem.name}
                </h2>
                <p>{elem.body}</p>
              </div>
            )
          })

        }
      </div>
      
      <Pagineton total={25} perPage={perPage} page={page} changePage={changePage} />
    </div>
  )
}