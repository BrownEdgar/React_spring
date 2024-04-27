import commentsSlice from '@f/comments/commentsSlice';
import counterSlice from '@f/counter/counterSlice';
import productsSlice from '@f/products/productsSlice';
import todosSlice from '@f/todos/todosSlice';
import { configureStore } from '@reduxjs/toolkit';
import moment from 'moment';

const myFirstMiddleWare = (store) => (next) => (action) => {
  console.log(moment().format('hh:mm:ss'));
  if (action.type === "comments/getComments/fulfilled") {
    action.payload.splice(0, 3)
  }
  next(action)
}

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    products: productsSlice,
    comments: commentsSlice
  },
  middleware: (x) => [...x(), myFirstMiddleWare]
})

export default store