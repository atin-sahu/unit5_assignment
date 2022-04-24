import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

 export const Login = ()=>{

    const { handleAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="enter usr name"></input>
            <input type="text" placeholder="enter password"></input>
            <button onClick={()=>{ handleAuth(true),navigate(-2) }}>Submit</button>
        </div>
    )
 }