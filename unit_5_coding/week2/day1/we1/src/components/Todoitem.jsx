export const Todoitem = ({todo,handleStatus})=>{
    return <div>
        <div>id:{todo.id}</div>
        {todo.tittle}-{todo.status?"done":'notdone'}
        <button onClick={()=>handleStatus(todo.id)}>Toggle</button>
    </div>;
}