import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/users/UserSlice";

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});
export default store;
