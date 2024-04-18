import React, { useState } from 'react'
import A from './A'
import { MyContext } from './contexts/Contexts'


export default function App() {
  console.log('App Render')
  const [data, setdata] = useState(147)
  return (
    <div>
      <h1>App</h1>
      <MyContext.Provider value={{ data, x: 1, setdata }}>
        <A />
      </MyContext.Provider>
    </div>
  )
}
