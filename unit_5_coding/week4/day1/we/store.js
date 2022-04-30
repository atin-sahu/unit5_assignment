
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import { add_counter,add_stdudent } from "./action";



const store = createStore(reducer,initState);
console.log("Store", store.getState());
store.dispatch(add_counter(1));
console.log("Store", store.getState());
store.dispatch(add_counter(1));
store.dispatch(add_stdudent("ritul","BCA"));
console.log("Store", store.getState());
