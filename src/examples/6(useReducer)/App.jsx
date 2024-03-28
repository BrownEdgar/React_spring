import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer';
import ACTIONS from './actionsTypes';
import axios from 'axios';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_ITEM, })
  }

  const addPost = () => {
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 4
      }
    }).then(res => {
      dispatch({
        type: ACTIONS.ADD_POSTS, payload: {
          posts: res.data
        }
      })

    })
  }

  return (
    <div className='App'>
      <h1>state: {JSON.stringify(state, null, 1)}</h1>
      <button onClick={handleClick}>add number</button>
      <button onClick={() => dispatch({ type: ACTIONS.ARRAY_SORT, payload: 'DESC' })}>sort</button>
      <button onClick={() => dispatch({ type: ACTIONS.FILL_ARRAY, payload: 12 })}>fill array</button>
      <button onClick={addPost}>add Posts</button>
    </div>
  )
}




