import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { fetchProducts } from '@f/products/productsSlice';
import { addCounter } from '@f/counter/counterSlice';

export default function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(addCounter())}>Add count</button>
    </div>
  )
}
