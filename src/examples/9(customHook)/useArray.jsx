import React, { useEffect, useState } from 'react'

export default function useArray({ quantity, min = 0, max = 100 }) {
  const [arr, setArr] = useState(() => {
    return Array.from({ length: quantity }, () => Math.round(Math.random() * (max - min) + min))
  })


  const min = () => {
    let minValue = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]
      }
    }
    return minValue;
  }
  const max = () => {
    let maxValue = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i]
      }
    }
    return maxValue;
  }
  const sort = () => {

  }

  return [arr];
}
