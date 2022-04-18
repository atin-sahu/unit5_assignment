import { useRef, useState } from 'react'
import './App.css'
import {Form} from "./components/Form";

function App() {

  const [counter,setCounter] = useState(10);
  const xRef = useRef(10);


  return (
    <div>
      <Form />

      <h1>countyer{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>add 1</button>
      <h1>X:{xRef.current}</h1>
      <button onClick={xRef.current = xRef.current+1}>X</button>
    </div>
  )
}

export default App
