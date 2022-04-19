import { useEffect, useState } from "react"
import { Counter } from "./Counter";

export const Todos = ()=>{

    const [todos,setTodos] = useState([]);
    const [text,setText] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        getdata();
        return ()=>{
            console.log("unmounted");
        }
    },[page]);

    const getdata = async()=>{
        const data = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
        .then((d)=>d.json())
        setTodos(data);
        setLoading(false);
    }

    return loading ? ("loading..."):<div>
        <input type="text" placeholder="enter todo" onChange={(e) => setText(e.target.value)}></input>
        <button onClick={()=>{
            const payload = {
                title:text,
                status:false,
            };
            fetch("http://localhost:8080/todos",{
                method:"post",
                headers:{"content-type":"application/json"
            },
            body:JSON.stringify(payload),
        }).then(()=>{
            getdata();
        })
        // axios.post("http://localhost:8080/todos",payload)
        }}>add to do</button>

        <div>
            {todos.map((e)=>{
                return <div key={e.id}>
                    <h3>{e.id} : {e.title}</h3>
                </div>
            })}
            <button onClick={()=>{setPage(page-1)}}>Previous</button>
            <button onClick={()=>{setPage(page+1)}}>Next</button>
            <Counter />
        </div>
    </div>
}