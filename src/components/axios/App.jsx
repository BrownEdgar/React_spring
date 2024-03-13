import React, { useState, useEffect } from 'react';
import axios from 'axios'
import instance from './axios';
import List from './List/List';



export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
    // axios('https://jsonplaceholder.typicode.com/comments', {
    //   params: {
    //     _limit: 10,
    //     _start: 14
    //   }
    // })
    // axios({
    //   method: 'GET',
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'comments',
    //   params: { _limit: 10 }
    // })
    // instance('/users')
    // axios.all([
    //   axios('https://jsonplaceholder.typicode.com/todos'),
    //   axios('https://jsonplaceholder.typicode.com/comments'),
    // ])
    axios('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
  }, [])

  return (
    <div className='App'>
      <List data={todos} />
    </div>
  )
}
