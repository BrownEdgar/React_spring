import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todosSlice from "../features/todos/todosSlice";
import usersSlice from "../features/users/usersSlice";
import moment from "moment";
import { nanoid } from "nanoid";

const addRegisteredAt = (store) => (next) => (action) => {
  if (action.type === "users/addUser") {
    action.payload.registredDate = moment().format("MMMM Do YYYY");
    next(action);
  } else {
    next(action);
  }
};
const addId = (store) => (next) => (action) => {
  if (action.type === "users/addUser") {
    action.payload.id = nanoid(6);
    next(action);
  } else {
    next(action);
  }
};

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    users: usersSlice,
  },
  middleware: (x) => [...x(), addRegisteredAt, addId],
});
