import commentsSlice from '@f/comments/commentsSlice';
import counterSlice from '@f/counter/counterSlice';
import productsSlice from '@f/products/productsSlice';
import todosSlice from '@f/todos/todosSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moment from 'moment';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['todos'],
}


const rootReducer = combineReducers({
  counter: counterSlice,
  todos: todosSlice,
  products: productsSlice,
  comments: commentsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export default store



