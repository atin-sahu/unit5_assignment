import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import { addReduce } from "./counter/reducer";
import { todoReduce } from "./todo/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter:addReduce,
    todo:todoReduce
});

// const middleware = (store) => (next) => (action)=>{
//     if(typeof action === "function"){
//         return action(store.dispatch);
//     }
//     next(action);
// }

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); //{counter:0,todo:[]} == window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



// store.subscribe(()=>{
//     console.log(store.getState());
// })