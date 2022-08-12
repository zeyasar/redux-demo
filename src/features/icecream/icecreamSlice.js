import { createSlice } from "@reduxjs/toolkit";
import {ordered} from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams: 20,
}


const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        icecreamOrdered:(state) =>{
            state.numOfIcecreams--
        },
        icecreamRestocked:(state, actions)=>{
            state.numOfIcecreams += actions.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered'] : (state) =>{
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder
        .addCase(ordered, (state)=>{
            state.numOfIcecreams--
        })
    }
})


const {actions, reducer} = icecreamSlice

export const {icecreamOrdered, icecreamRestocked} = actions
export default reducer