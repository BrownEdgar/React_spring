import React, { useState } from 'react'

export default function useCount({ type }) {

  const [count, setCount] = useState(() => {
    const random = Math.round(Math.random() * 100);
    if (type === 'even') {
      return random % 2 === 0 ? random : random + 1;
    }
    return random % 2 === 1 ? random : random + 1;
  })


  return count
}
