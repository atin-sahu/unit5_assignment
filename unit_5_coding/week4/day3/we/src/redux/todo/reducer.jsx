import { TODO } from "../todo/action"
const init = {todo:[]};

export const todoReduce = (store=init,{type,payload})=>{
    switch(type){
        case TODO: return{...store,todo:payload};
        default: return store;
    }
}

