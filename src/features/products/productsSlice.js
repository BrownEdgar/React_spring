import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: "products",
  initialState: { data: [] },
  reducers: {
    addproduct(state, action) {

    }
  }
})

export default productsSlice.reducer
export const { addproduct } = productsSlice.actions