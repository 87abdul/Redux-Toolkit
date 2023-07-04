import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {value : 0}

// Action generators
const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");
const incrementByAmount = createAction("counter/IncrementByAmount");


// Reducer

const counterReducer = createReducer(initialState, (builder) =>{

    builder.addCase(increment , (state) =>{
        state.value++; // state is reducer's state not global state
                        // return is not required
                        // state seems to mutated but its not
                        // immer library
    })
})


builder.addCase(decrement , (state) =>{
    state.value--;
})


builder.addCase(incrementByAmount , (state, action) =>{
    state.value += action.payload; 
})


export {increment, decrement, incrementByAmount};
export default counterReducer;