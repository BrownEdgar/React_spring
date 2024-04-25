import React, { useEffect } from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter } from './features/counter/counterSlice'
import { saveComments } from './features/comments/commentsSlice'
import axios from 'axios'

export default function App() {
  const counter = useSelector((state) => state.counter)
  const comments = useSelector((state) => state.comments)
  const dispatch = useDispatch()

  useEffect(() => {
    axios( 'https://jsonplaceholder.typicode.com/comments?_limit=10' )
    .then(res => dispatch(saveComments(res.data)))
  })

  return (
    <div>
      <h1>Redux counter : {counter}</h1>
      <h2>Redux comments : {JSON.stringify(comments)}</h2>
      <button onClick={() => dispatch(addCounter())}>plus</button>
    </div>
  )
}

