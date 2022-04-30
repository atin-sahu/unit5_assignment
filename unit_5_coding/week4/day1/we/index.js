import { legacy_createStore as createStore } from "redux";


// action types
const ADD_COUNTER = "ADD_COUNTER";
const ADD_STD = "ADD_STD";

// action creators
const add_counter = (payload)=>{
    return{
        type:ADD_COUNTER,
        payload,
    }

}
const add_stdudent = (nam,clas)=>{
    return{
        type:ADD_STD,
        payload:{
            name:nam,
            class:clas,
        }
    }

}

const initState = {
    counter:0,
    todo:[{name:"atin",class:"BCS"}],
}

const reducer = (initState,{type,payload}) =>{

    switch(type){
        case ADD_COUNTER :  return{...initState, counter:initState.counter + payload};
        case ADD_STD : return{...initState, todo:[...initState.todo, payload] };
        default : return initState
    }
}

const store = createStore(reducer,initState);
console.log("Store", store.getState());
store.dispatch(add_counter(1));
console.log("Store", store.getState());
store.dispatch(add_counter(1));
store.dispatch(add_stdudent("ritul","BCA"));
console.log("Store", store.getState());

