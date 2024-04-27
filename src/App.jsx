import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getComments } from '@f/comments/commentsSlice';

export default function App() {
  const comments = useSelector(state => state.comments)
  console.log(comments)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getComments())
  }, [])

  return (
    <div>

    </div>
  )
}
