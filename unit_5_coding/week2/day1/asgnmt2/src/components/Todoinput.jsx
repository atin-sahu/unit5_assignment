
import { useState } from 'react'

export const Todoinput = ({getdata}) => {
    const [text,setText]=useState("");

    return (
        <div>
            <input type={text} placeholder="Enter you Task" onChange={(e)=>{setText(e.target.value)}}></input>
            <button onClick={()=>{getdata(text)}}>+</button>
        </div>
    );
}

