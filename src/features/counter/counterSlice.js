import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 10,
    reducers: {
        addCounter(state){
            return state + 1
        }
    },
    selectors: {
        getCounter: (state) => {
            return state
        }
        }
}
)


export default counterSlice.reducer 
export const {addCounter} = counterSlice.actions
export const {getCounter} = counterSlice.selectors