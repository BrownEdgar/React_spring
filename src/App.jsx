import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import classNames from 'classnames'
import Pagination from './components/Pagination/Pagination'

export default function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(1)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/comments', 
    {
      params:{
        limit:34
      }
    }).then(res => setData(res.data))
  }, [])

  const changePage = (n) => setPage(n)
  const slice = data.slice((page * perPage) - perPage, (page * perPage))

  return(
    <div className="App">
      <div className="App__comments">
        {
          slice.map(elem => {
              return (
                <div key={elem.id}>
                  <span className='App__span1'>{elem.id}</span>
                  <p>{elem.body}</p>
                </div>
              )
            }
          )
        }
      </div>
      <Pagination total={34} perPage={perPage} page={page} changePage={changePage}/>
    </div>
  )
}



