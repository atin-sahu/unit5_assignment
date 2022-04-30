import { ADD, TODO } from "./action"

export const addReduce = (store,{type,payload})=>{
    switch(type){
        case ADD: return{...store, counter:store.counter+payload}
        case TODO: return{...store,todo:[...store.todo, payload]};
        default: return store;
    }
}

