 console.log("hi")
import {createStore} from "redux";

const speakAction = () =>{
    return{
        type : 'SPEAK',
        text
    }
}

const speakReducer = (state = {}, action) =>{

    switch(action.type) {

        case 'SPEAK' :
            // return {text : "hi"}
            return {text:action.text}
            default :
    return state;
    }
}


const store = createStore(speakReducer)

store.subscribe(()=>{

    console.log("store changed")
    console.log(store.getState())
})

// store.dispatch(speakAction())
// store.dispatch(speakAction())

store.dispatch(speakAction("hello"))
store.dispatch(speakAction("how are you ?"))


// output --> store changed
// text : hi