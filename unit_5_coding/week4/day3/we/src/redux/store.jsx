import {legacy_createStore as createStore, combineReducers} from "redux";
import { addReduce } from "./counter/reducer";
import { todoReduce } from "./todo/reducer";

const rootReducer = combineReducers({
    counter:addReduce,
    todo:todoReduce
});

export const store = createStore(
    rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); //{counter:0,todo:[]} == window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



// store.subscribe(()=>{
//     console.log(store.getState());
// })