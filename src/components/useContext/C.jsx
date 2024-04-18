import React, { useContext } from 'react'
import { MyContext } from './contexts/Contexts'


export default function C() {
  const value = useContext(MyContext)
  return (
    <div>
      <h1>Component C</h1>
      <h2>
        <mark>value: {JSON.stringify(value)}</mark>
        <button onClick={() => value.setdata(value.data + 1)}>PLUS</button>
      </h2>
    </div>
  )
}
