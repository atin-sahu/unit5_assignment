import "./Counter.css";

function Counter({prop,set}){

    function IncDec(value){
        set(prop+value);
    }

    return <div>
        <h1 className="mid">Likes:<spam>{prop}</spam></h1>
        <button onClick={()=>IncDec(1)}>Increment</button>
        <button onClick={()=>IncDec(-1)}>Decrement</button>
    </div>
}

export {Counter};

// -------------------------


// import "./Counter.css";

// function Counter({btn,name,inc,dec}){
//     return <div>
//         <h1 className="mid">Likes:<spam className={name%2 == 0 ? "greentext":"redtext"}>{name}</spam></h1>
//         <div className="btn_div">
//             {
//                 btn.map((el)=>{
//                     return (
//                         <div>
//                             <button className={el==='Increment' ? 'greentext':'redtext'} onClick={el==='Increment' ? inc:dec}>{el}</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
// }


// export {Counter};