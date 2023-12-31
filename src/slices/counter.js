import {createSlice} from "@reduxjs/toolkit";

const initialState = {value : 0}

const CounterSlice = createSlice({
    name : 'kounter',
    initialState,
    reducers : {
        increment(state){state.value++;}
    },

    decrement(state){
        state.value--;
    },

    incrementByAmount(state, action){
        state.value += action.payload;
    }
})

export const {increment, decrement, incrementByAmount} = CounterSlice.actions
export default CounterSlice.reducer



// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
