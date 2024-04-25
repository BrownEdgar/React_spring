import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        saveComments(state, action){
            return action.payload
        }
    }
})

export default commentsSlice.reducer
export const {saveComments} = commentsSlice.actions