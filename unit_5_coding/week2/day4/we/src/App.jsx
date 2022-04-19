import { useEffect, useRef, useState } from 'react'
import './App.css'
import {Form} from "./components/Form";

function App() {

  const [counter,setCounter] = useState(10);
  const x = useRef(5);
  const [timer,setTimer] = useState(0);
  const timerRef = useRef(0);

  useEffect(()=>{
    timerRef.current = setInterval(()=>{
      setTimer((p)=>p+1);
    },500)
  },[]);

  const startinverval = ()=>{
    timerRef.current = setInterval(()=>{
      setTimer((p)=>p+1);
    },500)
  }

  const divref1 = useRef(null);
  const divref2 = useRef(null);
  const divref3 = useRef(null);

  return (
    <div>
      <Form />

      <h1>counter : {counter}</h1>
      <button onClick={()=>{setCounter(counter+1); console.log(counter);}}>add 1</button>

      <h1>X : {x.current}</h1>
      <button onClick={()=>{x.current += 1; console.log(x);}}>X</button>

      <h1>Timer : {timer}</h1>
      <button onClick={()=>{clearInterval(timerRef.current)}}>Puse</button>
      <button onClick={()=>{startinverval()}}>Start</button>
      <button onClick={()=>{clearInterval(timerRef.current),setTimer(0)}}>Reset</button>

    <div ref={divref1} className="red">top</div>
    <div ref={divref2} className="green">middle</div>
    <div ref={divref3} className="blue">bottom</div>

    <button onClick={()=>{divref1.current.scrollIntoView({behavior:"smooth"})}}>top</button>
    <button onClick={()=>{divref2.current.scrollIntoView({behavior:"smooth"})}}>middle</button>
    <button onClick={()=>{divref3.current.scrollIntoView({behavior:"smooth"})}}>bottom</button>
    

    </div>
  )
}

export default App
