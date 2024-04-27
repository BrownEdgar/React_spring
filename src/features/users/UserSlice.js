import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "Javascript",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "HTML/CSS",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "React",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "Node",
    },
    {
      id: 5,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "Node",
    },
    {
      id: 6,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "React",
    },
    {
      id: 7,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "HTML/CSS",
    },
    {
      id: 8,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment().format("MM-DD-YYYY"),
      language: "Javascript",
    },
  ],
  languageFilter: null,
};

const user = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLanguageFilter: (state, action) => {
      state.languageFilter = action.payload;
    },
  },
});

export default user.reducer;
export const { setLanguageFilter } = user.actions;
