import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import todosSlice from '../features/todos/todosSlice'
import { saveProducts } from '../features/products/productsSlice'
import usersSlice from '../features/users/usersSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todosSlice,
        users: usersSlice
    }
})

export default store