import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import classNames from 'classnames'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { ClimbingBoxLoader } from "react-spinners";
import './App.scss'

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios('https://dummyjson.com/quotes', {
      params: {
        limit: perPage,
        skip: (page * perPage) - perPage
      }
    })
      .then(res => setData(res.data.quotes))
      .finally(() => setLoading(false))
  }, [page, perPage])

  const changePage = (n) => setPage(n)

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }

  return (

    <div className='App'>
      <div className="App__Quotes">
        <div className={classNames("App__Loader", {
          "App__Loader-hidden": !loading
        })}>
          <ClimbingBoxLoader
            color={"#36d7b7"}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        {
          data.map(elem => {
            return (
              <div key={elem.id} className={classNames({
                "blur": loading
              })}>
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
      {/* <Pagination total={100} perPage={perPage} page={page} changePage={changePage} /> */}
      <ReactPaginate
        breakLabel={<i className="bi bi-three-dots"></i>}
        nextLabel={<i className="bi bi-arrow-bar-right"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(100 / perPage)}
        previousLabel={<i className="bi bi-arrow-bar-left"></i>}
        renderOnZeroPageCount={null}
        className='App__navigation'
        activeClassName='active'
      />
    </div>
  )
}
