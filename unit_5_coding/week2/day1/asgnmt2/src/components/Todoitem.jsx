

export const Todoitem = ({todo,changeStatus})=>{

    return (
        <div>
            <div>
                <span>{todo.title}</span>
                <span>{todo.status ? "Done" : "Pending"}</span>
            </div>
            <div>
                <input type="checkbox" onClick={()=>{changeStatus(todo,todo.id)}}></input>
            </div>
        </div>
    )
}