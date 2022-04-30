export const TODO = "TODO";
export const SORT = "SORT";
export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";
export const addTodo = (todo)=>({type:TODO, payload:todo});

export const getTodo =() => async (dispatch)=>{
        const data = await fetch("http://localhost:8080/todo")
        .then(data => data.json());
       dispatch(addTodo(data))
}

export const Sort = (value) => ({type:SORT,payload:value});
export const Delete = (id) => ({type:DELETE,payload:id});
export const Toggle = (id) => ({type:TOGGLE,payload:id});