import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const createProductsSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
})

const productsSlice = createProductsSlice({
  name: 'products',
  initialState: {
    data: []
  },
  reducers: (create) => ({
    fetchProducts: create.asyncThunk(
      async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/users')
        const users = res.data.map(user => user.name);
        return users
      },
      {
        pending: (state, action) => { },
        fulfilled: (state, action) => {
          return {
            data: action.payload
          }
        },
        rejected: (state, action) => {
          console.log(action)
        },
        settled: (state, action) => {
          console.log("Finish");
        }
      }
    ),


  })

})

export default productsSlice.reducer;
export const { fetchProducts } = productsSlice.actions