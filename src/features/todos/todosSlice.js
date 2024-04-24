import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    saveTodos(state, action) {
      return action.payload;
    },
    deleteTodo(state) {
      state.splice(-1, 1);
    },
  },
  selectors: {
    getTodos: (state) => state,
  },
});

export default todosSlice.reducer;
export const { saveTodos, deleteTodo } = todosSlice.actions;
export const { getTodos } = todosSlice.selectors;
