import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "usrs",
  initialState: [],
  reducers: {
    setUSers(state, action) {
      return action.payload;
    },
    usersFilter(state, action) {
     return state.filter((elem) => elem.language == action.payload);
    },
  },
});

export default userSlice.reducer;
export const { setUSers, usersFilter } = userSlice.actions;
