import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: true,
    users: [],
    error:''
}

export const fetchUser = createAsyncThunk('users/fetchUser',async () => {
    return await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data.map(user=>user.id))
})
// console.log(fetchUser());

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchUser.pending, (state) =>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        .addCase(fetchUser.rejected, (state, action) =>{
            state.loading = false
            state.error = action.error.message
            state.users = []
        })
    }
})

export default usersSlice.reducer