import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import { initState } from "./reducer";

export const store = createStore(reducer,initState);


