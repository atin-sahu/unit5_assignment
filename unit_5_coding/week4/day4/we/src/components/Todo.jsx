import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, getTodo, Sort, Toggle } from "../redux/todo/action";

export const Todo = ()=>{
    const [text,setText] = useState("");
    const todo = useSelector((store)=>(store.todo.todo));
    const dispatch = useDispatch();
    const [filter,setFilter] = useState("");

    useEffect(()=>{
        dispatch(getTodo());
    },[])

    // const getData = ()=>{
    //     fetch("http://localhost:8080/todo")
    //     .then(data => data.json())
    //     .then(data => dispatch(addTodo(data)))
    // }

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
        .then(() => dispatch(getTodo()));
    }

    return (
        <div>
            <hr></hr>
            <input placeholder="enter to filter" type="text" value={filter} onChange={e => setFilter(e.target.value)}></input>
            <select onChange={(e) =>{
                dispatch(Sort(e.target.value));
            }}>
                <option value="id">sort by id</option>
                <option value="status">sort by status</option>
                <option value="title">sort by title</option>
            </select>
            <input value={text} onChange={e=>setText(e.target.value)} type="text" placeholder="enter text"></input>
            <button type="submit" onClick={handleTodo}>submit</button>
            {todo.filter(todo => todo.title.includes(filter)).map( e => (<div>
                <p key={e.title}>{e.id} : {e.title} : {e.status ? "done" : "notdone"}</p>
                <button onClick={() => dispatch(Delete(e.id))}>delete</button>
                <button onClick={() => dispatch(Toggle(e.id))}>Toggle</button>
                </div>) )}
        </div>
    )
}