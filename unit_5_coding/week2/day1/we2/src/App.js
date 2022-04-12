import './App.css';
import {useState} from "react";

function App() {
  const [sms,setSms] = useState("");

  const getmsg = (msg)=>{
    setSms(msg)
  }

  return (
    <div className="App">
      <First fun={getmsg}></First>
      <Second varr={sms}></Second>
    </div>
  );
}

function First({fun}){
  const msg = "hello ankush";
  return <div>first:
    <button onClick={()=>fun(msg)}>send data</button>
  </div>
  
}

function Second({varr}){
  return <div>second:
      <h1>{varr}</h1>
    </div> 
}

export default App;
