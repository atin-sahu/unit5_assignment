import { useState } from "react";

export const Todoinput = ({func})=>{
    const [text,setText] = useState("");

    return <div>
        <input  onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="enter input"></input>
        <button onClick={()=>{func(text)}}>add todo</button>
        <h1>{text}</h1>
    </div>
}