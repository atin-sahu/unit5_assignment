import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/counter/action";


export const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((store)=>(store.counter.counter)) ; //function eneuality(present,curr){if(){}else{}}

    return (
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={()=>{dispatch(addCount(1))}}>add</button>
        </div>
    )
    
}