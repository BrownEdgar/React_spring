import { configureStore } from "@reduxjs/toolkit";
import counterSlise from "../features/counter/counterSlise";
import todosSlice from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlise,
    todos: todosSlice,
  },
});
