import {useState} from 'react'
import { Counter } from './components/Counter';
import { Todos } from './components/Todos';

function App() {
  // const [counter, setCounter] = useState(0);
  const [show,setShow] = useState(true);

  return (

    <div>
      { show ? <Todos></Todos> : null}
      <button onClick={()=>{setShow(!show)}}>{show ? "Hide" :"Show"}</button>
      {/* <h1>counter:{counter}</h1> */}
      {/* <button onClick={()=>{setCounter(counter+1)}}>add</button> */}
      <Counter />

    </div>
  )
}

export default App
