import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    plusCount(state) {
      return state + 1;
    },
    minusCount(state) {
      return state - 1;
    },
  },
  selectors: {
    getCounter: (state) => state,
  },
});

export default counterSlice.reducer;
export const { plusCount, minusCount } = counterSlice.actions;
export const { getCounter } = counterSlice.selectors;
