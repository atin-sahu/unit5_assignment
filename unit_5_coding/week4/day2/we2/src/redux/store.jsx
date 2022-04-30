import {legacy_createStore as createStore} from "redux";
import { addReduce } from "./reducer";

export const store = createStore(addReduce,{counter:0,todo:[]});

// store.subscribe(()=>{
//     console.log(store.getState());
// })