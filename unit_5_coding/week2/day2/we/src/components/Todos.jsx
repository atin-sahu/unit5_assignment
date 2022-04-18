import { useEffect, useState } from "react"

export const Todos = ()=>{

    const [todos,setTodos] = useState([]);
    const [text,setText] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        // const getdata = async()=>{
        //     const data = await fetch("http://localhost:8080/todos")
        //     .then((d)=>d.json())
        //     // .then((data)=>{
        //     // setTodos(data);
        //     // });
        //     setTodos(data);
        // }

        getdata();
        // console.log("atin sahu");
    },[]);

    const getdata = async()=>{
        const data = await fetch("http://localhost:8080/todos")
        .then((d)=>d.json())
        // .then((data)=>{
        // setTodos(data);
        // });
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
                return <div>
                    <span>{e.title}  :</span>
                    <span> {e.id}</span>
                </div>
            })}
        </div>
    </div>
}