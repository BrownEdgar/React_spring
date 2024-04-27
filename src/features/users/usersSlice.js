import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers(state,action){
            return action.payload
        },
        Filter(state, action){
            return state.filter((elem) => elem.language == action.payload) 
        }
    }
})

export default usersSlice.reducer
export const {setUsers, Filter} = usersSlice.actions