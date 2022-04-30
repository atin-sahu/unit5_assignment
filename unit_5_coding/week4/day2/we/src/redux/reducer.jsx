import { Add_Count } from "./action";
import { Add_Std } from "./action";

export const initState = {
    counter:0,
    todo:[{name:"atin",class:"BCS"}],
}

export const reducer = (initState,{type,payload}) =>{
    console.log(initState,{type,payload});

    switch(type){
        case Add_Count :  return{...initState, counter:initState.counter + payload};
        case Add_Std : return{...initState, todo:[...initState.todo, payload] };
        default : return initState
    }
}
