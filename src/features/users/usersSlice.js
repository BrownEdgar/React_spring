import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:"users",
    initialState: [],
    reducers: {
        setUsers(action){
            return action.payload
        },
        usersFilter(state,action){
            return state.filter((elem) => elem.language === action.payload)
        },
    },
})

export default usersSlice.reducer
export const {setUsers, usersFilter} = usersSlice.actions