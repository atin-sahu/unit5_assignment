import './App.css';
import {useState} from "react";
import {Counter} from "./components/Counter";

function App() {
  const [counter,setCounter] = useState(0);

  function Double(){
    setCounter(counter*2);
  }

  return (
    <div className="App">
      <Counter prop={counter} set={setCounter} />
      <button onClick={()=>Double()}>Double</button>
      <h1>number is:<span className={counter%2==0?"greentext":"redtext"}>{counter%2==0?"Even":"Odd"}</span></h1>
    </div>
    
  );
}

export default App;



// ---------------------------


// import './App.css';
// import {useState} from "react";
// import {Counter} from "./components/Counter";

// function App() {
//   let prop = ["Increment","Dcrement"];
//   const [counter,setCounter] = useState(0);

//   function Inc(value){
//     setCounter(counter + value);
//   }

//   function Dec(value){
//     setCounter(counter + value);
//   }

//   function Double(){
//     setCounter(counter*2);
//   }

//   return (
//     <div className="App">
//       <Counter name={counter} btn={prop} inc={()=>Inc(1)} dec={()=>Dec(-1)}/>
//       <div className='mid'>
//         <button className='blue' onClick={()=>Double()}>Double</button>
//       </div>
//       <div>
//         <h1 className='mid'>
//           Number is : <spam className={counter%2 == 0 ? "greentext":"redtext"}>{counter%2 == 0 ? "Even":"Odd"}</spam>
//         </h1>
//       </div>
      
//     </div>
//   );
// }

// export default App;

