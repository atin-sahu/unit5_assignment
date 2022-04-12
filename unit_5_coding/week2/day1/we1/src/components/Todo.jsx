import {useState} from "react"
import{Todoinput} from "./Todoinput"
import { Todoitem } from "./Todoitem";
import {nanoid} from "nanoid";


function Todo(){

    const [names,setNames] = useState([]);

    const getinp = (inp)=>{
        const payload = {
            tittle:inp,
            status:false,
            id:nanoid(5),
        }
        setNames([...names,payload])
    }

    const handleStatus=(id)=>{
        setNames(names.map((e)=>(e.id === id ? {...e, status:!e.status}:e)));
    }
    return <div>
        <h1>todo</h1>
        <Todoinput func={getinp} />
         {names.map((e)=>{
         return <Todoitem handleStatus={handleStatus} todo={e}></Todoitem>
        })}
    </div>
}

export {Todo};