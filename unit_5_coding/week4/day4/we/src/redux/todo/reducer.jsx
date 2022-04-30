import { DELETE, SORT, TODO, TOGGLE } from "../todo/action"
const init = {todo:[]};

export const todoReduce = (store=init,{type,payload})=>{
    switch(type){
        case TODO: return{...store,todo:payload};
        case SORT : return {...store, todo:[...store.todo].sort((a,b) => {
           return a[payload]>b[payload] ? 1 : a[payload]<b[payload] ? -1 : 0
        })}
        case DELETE : return {...store, todo:store.todo.filter((el) => el.id !== payload)}
        case TOGGLE : return {...store, todo:store.todo.map((todo) => 
           todo.id === payload ? {...todo, status: !todo.status} : todo
        )}
        default: return store;
    }
}

