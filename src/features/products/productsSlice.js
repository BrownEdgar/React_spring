import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers: {
        saveProducts(state, actions){
            return state
        }

    }
})

export default productsSlice.reducer
export const {saveProducts} = productsSlice.actions