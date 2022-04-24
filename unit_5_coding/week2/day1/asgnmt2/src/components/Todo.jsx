
import { useState } from "react"
import { Todoinput } from "./Todoinput"
import { Todoitem } from "./Todoitem"
import {nanoid } from "nanoid";
import { Doneitem } from "./Doneitem";


export const Todo = ()=>{

    const [list,setList] = useState([]);
    const [donelist, setDonelist] = useState([]);

    const getdata = (todo)=>{
        const payload = {
            title:todo,
            status:false,
            id:nanoid(5),
        }

        setList([...list,payload]);
    }


    const changeStatus = (todo,id)=>{

       if(!todo.status){
            const load = {
                title:todo.title,
                status:`${todo.status ? false : true}`,
                id:id,
            }
            
            setList([...list.map((e)=>(e.id===id ?{...e,status:!e.status}:e))])
            setDonelist([...donelist,load]);
       }else if(todo.status){
            const reload = {
                title:todo.title,
                status:`${todo.status ? false : true}`,
                id:id,
            }

            setDonelist([...donelist.map((e)=>(e.id===id ?{...e,status:!e.status}:e))])
            setList([...list,reload]);
            
       }
        
    }

    return (
        <div>
            <Todoinput getdata={getdata}/>

            {list.map((e)=>(!e.status ? 
                <Todoitem todo={e} changeStatus={changeStatus}></Todoitem> : null
            ))}

            {donelist.map((e)=>(e.status ? 
                <Doneitem done={e} changeStatus={changeStatus}></Doneitem> : null
            ))}

        </div>
    )
}