import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers:{
        ordered :(state) => {
            state.numOfCakes--
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

const {actions, reducer} = cakeSlice

export const {ordered, restocked} = actions
export default reducer

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions 