import axios from 'axios';
import { addCounter, getCounter } from './features/counter/counterSlice';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveTodos } from './features/todos/todosSlice';

export default function App() {
  const counter = useSelector(getCounter);
  const todos = useSelector((state) => state.todos)

  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then(res => dispatch(saveTodos(res.data)))
  }, [])

  return (
    <div>
      <h1>Redux counter : {counter} </h1>
      <h1>Redux todos : {JSON.stringify(todos)} </h1>
      <button onClick={() => dispatch(addCounter())}>PLUS</button>
    </div>
  )
}
