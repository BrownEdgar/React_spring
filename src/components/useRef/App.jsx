
import React, { useEffect, useRef, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])

  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef?.current)
  }




  return (
    <div>
      <form onSubmit={handleSubmit} ref={inputRef}>
        <input type="text" />
        <input type="submit" value="save" />
      </form>

    </div>
  )
}
