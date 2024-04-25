import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    addCounter(state) {
      return state + 1;
    },
  },
  selectors: {
    getCounter: (state) => {
      return state;
    },
  },
});
export default counter.reducer;
export const { addCounter } = counter.actions;
export const { getCounter } = counter.selectors;
