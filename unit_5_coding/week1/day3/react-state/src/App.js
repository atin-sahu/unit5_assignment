import './App.css';
import {useState} from "react";

// import {Category} from "./components/Category";

function App() {
const [counter,setCounter] = useState(0);

// const handleadd = ()=>{
//   if(counter>=5){
//     return;
//   }
//     setCounter(counter+1);
//   }

//   const handlesub = ()=>{
//     if(counter<=0){
//       return;
//     }
//     setCounter(counter-1);
//   }

const handlecounter = (value)=>{
 
//   if(counter>=5){
//     return;
//   }
//  if(counter<=0){
//     return;
//   }

if(counter>3){
  alert("you can cant click more");
}

  setCounter(counter + value);
}

  if(counter>=5){
    return <p>exceed limit</p>
  }

  return (
    <div className="App">
      <h3>counter:{counter}</h3>

      {/* <button onClick={handleadd}>add 1</button>
      <button onClick={handlesub}>sub 1</button> */}

      <button onClick={()=> handlecounter(1) }>add 1</button>
      <button onClick={()=> handlecounter(-1) }>sub 1</button>

      {/* <h1>number is: {counter%2 === 0 ? <p className='even'>even</p> : <p className='odd'>odd</p>}</h1> */}
      <h1 className={counter%2 === 0 ? 'even':'odd'}>number is: {counter%2 === 0 ? 'even':'odd'}</h1>

    </div>
  );

}

export default App;


// ------------------------for createnig components or categories

// function App() {

//   const data_arr = [
//     {
//       img_url:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//       tittle:"clothes",
//     },
//     {
//       img_url:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//       tittle:"shop",
//     },
//   ];

//   return (
//     <div className="App">
//       {data_arr.map((el)=>(
//         <Category img={el.img_url} label={el.tittle} />
//       ))}
     
//     </div>
//   );
// }