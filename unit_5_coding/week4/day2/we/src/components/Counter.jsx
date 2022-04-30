import { useContext } from "react";
import { add_counter } from "../redux/action";
import { StoreContext } from "../redux/StoreContext";


export const Counter = ()=>{
    
    const {dispatch,getState} = useContext(StoreContext);
    const { counter } = getState();

    const hanldecount = ()=>{
        dispatch(add_counter(1))

    }
    return <div>
        <h1>counter : {counter} </h1>
        <button onClick={hanldecount}>add</button>
    </div>

}