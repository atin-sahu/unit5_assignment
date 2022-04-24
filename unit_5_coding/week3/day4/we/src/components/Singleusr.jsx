import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { Navigate, useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Singleusr = ()=>{
    const { id } = useParams();
    const [user,setUser] = useState({});
    const {isAuth} =  useContext(AuthContext)

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(({ data })=>{setUser(data.data)});
    },[])

    if(!isAuth){
        return <Navigate to={"./login"}></Navigate>
    }

    return <div>
        <img src={user.avatar}></img>
        <h1>First:{user.first_name}</h1>
        <h1>Last:{user.last_name}</h1>
    </div>
}