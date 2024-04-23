import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import todosSlice from '../features/todos/todosSlice';
import productsSlice from '../features/products/productsSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    products: productsSlice
  }
})

export default store