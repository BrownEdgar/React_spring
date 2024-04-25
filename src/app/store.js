import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import commentsSlice from '../features/comments/commentsSlice'

const store = configureStore({
    reducer: {
        counter:counterSlice,
        comments: commentsSlice
    }
})

export default store