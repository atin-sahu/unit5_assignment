import { ADD } from "../counter/action"
const init = {counter:0};

export const addReduce = (store=init,{type,payload})=>{
    switch(type){
        case ADD: return{...store, counter:store.counter+payload}
        default: return store;
    }
}

