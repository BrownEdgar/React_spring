import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getTodos from './todosAPI';

export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos',
  getTodos
)

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    saveTodos(state, action) {
      return action.payload
    }
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getAsyncTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAsyncTodos.rejected, (state) => {
        state.loading = false;
      })
  }
})

export default todosSlice.reducer;
export const { saveTodos } = todosSlice.actions