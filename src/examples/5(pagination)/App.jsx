import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import classNames from 'classnames'
import axios from 'axios';
import './App.scss'

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    axios('https://dummyjson.com/quotes', {
      params: {
        limit: perPage,
        skip: (page * perPage) - perPage
      }
    }).then(res => setData(res.data.quotes))
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
                  "App__title-sm": elem.quote.length > 80
                })}>
                  {elem.quote}
                </h2>
                <p>{elem.author}</p>
              </div>
            )
          })

        }
      </div>
      <Pagination total={100} perPage={perPage} page={page} changePage={changePage} />
    </div>
  )
}
