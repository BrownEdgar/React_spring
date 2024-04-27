import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios("http://localhost:3000/users");
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
      axios.post("http://localhost:3000/users", action.payload);
    },
    deleteUser: (state, action) => {
      axios.delete(`http://localhost:3000/users/${action.payload}`);
      const filtredArray = state.data.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        data: filtredArray,
      };
    },
  },
  selectors: {
    getUsers: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;
export const { getUsers } = usersSlice.selectors;
