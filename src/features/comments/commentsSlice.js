import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getComments = createAsyncThunk("comments/getComments", async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/comments?_limit=6')
  return response.data
})


const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    status: ''
  },
  reducers: {

  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getComments.fulfilled, (state, action) => {
        state.data = action.payload
      })
  }
})
export default commentsSlice.reducer