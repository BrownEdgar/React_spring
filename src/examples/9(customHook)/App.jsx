import React from 'react'
import './App.scss'

import useFetch from './useFetch';
import useCount from './useCount';

export default function App() {
  const [data, loading, error] = useFetch({ url: 'https://jsonplaceholder.typicode.com/todos' });
  const count = useCount({ type: 'odd' })

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='App'>
      {
        data.map(elem => {
          return (
            <div key={elem.id}>
              <h1>{elem.title}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
