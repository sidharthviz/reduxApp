import {configureStore} from '@reduxjs/toolkit'
import  counterSlice  from '../feauture/counter/counterSlice'

export const store =  configureStore({
    reducer: {
        counter: counterSlice
    },
})