import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = [
  {
    id: 1,
    firstName: "Sophie",
    lastName: "Johnson",
    registredDate: moment("03 14 2018").format("Do MMM YY"),
    language: "ract",
  },
  {
    id: 2,
    firstName: "Ethan",
    lastName: "Williams",
    registredDate: moment("05 22 2023").format("Do MMM YY"),
    language: "node",
  },
  {
    id: 3,
    firstName: "Isabella",
    lastName: "Brown",
    registredDate: moment("10 05 2019").format("Do MMM YY"),
    language: "node",
  },
  {
    id: 4,
    firstName: "Liam",
    lastName: "Smith",
    registredDate: moment("01 08 2014").format("Do MMM YY"),
    language: "javascript",
  },
  {
    id: 5,
    firstName: "Ava",
    lastName: "Jones",
    registredDate: moment("07 19 2021").format("Do MMM YY"),
    language: "HTMl&CSS",
  }
]

const userSlice = createSlice({
  name: "usrs",
  initialState,
  reducers: {
    usersFilter(state, action) {
     return state.filter((elem) => elem.language == action.payload);
    },
  },
});

export default userSlice.reducer;
export const {  usersFilter } = userSlice.actions;
