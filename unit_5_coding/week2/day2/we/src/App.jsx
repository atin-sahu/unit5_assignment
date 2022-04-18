import { useEffect, useState } from 'react'
import {Hello} from './components/Hello'
import './App.css'
import { Todos } from './components/Todos';

function App() {
  // const [show, setShow] = useState(true);

  // const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  // useEffect(()=>{
  //   fetch("http://localhost:8080/todos")
  //   .then((d)=>d.json())
  //   .then((data)=>{
  //     setTodos(data);
  //   });
  //   console.log(todos);
  // },[]);

  return (

    <div>
      {/* {todos.map((todo)=>(
        <div>
          <span>{todo.id} : </span>
          <span>{todo.title}</span>
        </div>
      ))} */}

      <Todos></Todos>

      <h1>counter:{counter}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>add</button>

      {/* <div className="App">
        {show?<Hello></Hello>:null}
        <button onClick={()=>{setShow(!show)}}>show/hide</button>
      </div> */}
    </div>
  )
}

export default App
