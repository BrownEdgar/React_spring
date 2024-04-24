import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, getCounter } from './features/counter/counterSlice'
import axios from 'axios'
import { saveTodos } from './features/todos/todosSlice'

export default function App() {
  const counter = useSelector(getCounter)
  const todos = useSelector((state) => state.todos)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos/?_limit=3')
    .then(res => dispatch(saveTodos(res.data)))
  }, [])
  
  return (
    <div>
      <h1>Redux counter : {counter}</h1>
      <h1>Redux todos : {JSON.stringify(todos)}</h1>
      <h1>Redux products : {JSON.stringify(products)}</h1>
      <button onClick={() => dispatch(addCounter())}>plus</button>

    </div>
  )
}
