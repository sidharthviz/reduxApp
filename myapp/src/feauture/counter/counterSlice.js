import { createSlice } from  '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

//action: the action is what we are updating and creating to change in UI
//then we have to create key value-pair 
//payload: the value whch action carry and sent it with dispatch to the store
//the mutable logic we write

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        deoposit: (state) => {
            state.value += 1
         
        },
        withdraw: (state) => {
            state.value -= 1
        },

        depositByValue: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {deposit, withdraw, depositByValue} = counterSlice.actions

export default counterSlice.reducer