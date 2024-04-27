import { configureStore } from "@reduxjs/toolkit";
import counterSlise from "../features/counter/counterSlise";
import todosSlice from "../features/todos/todosSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlise,
    todos: todosSlice,
    users: usersSlice,
  },
});
