import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import './App.scss'
import { useTransition } from 'react';


export default function App() {
  const [comments, setComments] = useState([]);
  const [filteredArr, setFilteredArr] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [timerId, setTimerId] = useState(null)

  const [isPending, startTransition] = useTransition();

  const inputRef = useRef(null);



  useEffect(() => {
    if (searchValue.trim().length > 0) {
      const f = comments.filter(comment => comment.name.includes(searchValue));
      setFilteredArr(f)
      throw new Error("Booommm")
    } else {
      setFilteredArr(comments)
    }
  }, [searchValue])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        setComments(res.data)
        setFilteredArr(res.data)
      })
  }, [])

  const handleChange = (e) => {
    if (timerId !== null) {
      clearTimeout(timerId)
    }
    const s = setTimeout(() => {
      startTransition(setSearchValue(inputRef?.current.value))
    }, 300)
    setTimerId(s)
  }

  return (
    <div className='App'>
      <div>
        <h1>searchValue: {searchValue}</h1>
        <form>
          <input type="search" name="search" id="search" onChange={handleChange} ref={inputRef} />
        </form>
        <span>
          comments: <mark>{filteredArr.length}</mark>
        </span>
      </div>
      <div className="wrapper">
        {isPending && <h1>Loading...</h1>}
        {
          filteredArr.map(elem => {
            return (
              <div key={elem.id}>
                <h2>{elem.name}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
