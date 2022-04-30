import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action";

export const Todo = ()=>{
    const [text,setText] = useState([]);
    const todo = useSelector((store)=>(store.todo));
    const dispatch = useDispatch();

    return (
        <div>
            <hr></hr>
            <input onChange={e=>setText(e.target.value )} type="text" placeholder="enter text"></input>
            <button type="submit" onClick={()=>{dispatch(addTodo(text))}}>submit</button>
            {todo.map( e => (<p key={e}>{e}</p>) )}
        </div>
    )
}