import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todo/action";

export const Todo = ()=>{
    const [text,setText] = useState("");
    const todo = useSelector((store)=>(store.todo.todo));
    const dispatch = useDispatch();

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        fetch("http://localhost:8080/todo")
        .then(data => data.json())
        .then(data => dispatch(addTodo(data)))
    }

    const handleTodo = ()=>{
  
        const payload={
            title:text,
            status:false,
        };

        fetch("http://localhost:8080/todo",{
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json",
            },
            method:"POST"
        }).then(()=>setText(""))
        .then(getData);
    }

    return (
        <div>
            <hr></hr>
            <input value={text} onChange={e=>setText(e.target.value)} type="text" placeholder="enter text"></input>
            <button type="submit" onClick={handleTodo}>submit</button>
            {todo.map( e => (<p key={e.title}>{e.title}</p>) )}
        </div>
    )
}