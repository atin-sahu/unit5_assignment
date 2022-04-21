import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
export const User = ()=>{

    const [user,setUser] = useState([]);

    useEffect(()=>{
        axios.get("https://reqres.in/api/users")
        .then(({data}) =>{
            setUser(data.data);
        })
    },[]);

    return (
        <div>
            {user.map((e)=>{
               return <p key ={e.id}>
                    <Link to={`/users/${e.id}`}>{e.id}:{e.first_name}</Link>
                </p>
            })}
        </div>
    )
}
