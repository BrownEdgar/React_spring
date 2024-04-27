import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import commentsSlice from '../features/comments/commentsSlice'
import usersSlice from '../features/users/usersSlice'

const store = configureStore({
    reducer: {
        counter:counterSlice,
        comments: commentsSlice,
        users:usersSlice
    }
})

export default store