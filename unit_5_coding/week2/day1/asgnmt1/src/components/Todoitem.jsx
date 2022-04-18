import React from 'react'
import "./Todo.css"
function Todoitem({todo,handelstatus}) {
  return (
  <div className='todolist'>

    <div className='div'>{todo.title}-{todo.status ? "Done":"Not Done"}</div>
    <div className='btn' onClick={()=>{
        handelstatus(todo.id)
    }}></div>
    </div>
  
  )
}

export default Todoitem