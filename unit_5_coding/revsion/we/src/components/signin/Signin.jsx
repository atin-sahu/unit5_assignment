import { Box, Center,Text,Input, Button } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate  } from "react-router-dom";
// import { useHistory } from "react-router-dom"


export const Signin = ()=>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState ("");
    // const history = useHistory();
    const navigate = useNavigate();
    

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            // history.push("/home")
            navigate("/home");
            console.log("yes");
        }else{
            console.log("no");
        }
    },[]);

    const userLogin = async (event)=>{
        event.preventDefault();

        try {
            const res = await axios.post("https://reqres.in/api/login",{email: email,password : pass})
            .then((res)=>(res.data));
            console.log(res)
            localStorage.setItem("user-info",JSON.stringify(res.token));
            // history.push('/home');
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
        

    }
    return (
        <Box>
            <Center><Text>Sign - in</Text></Center>
            <form >
                {/* <Center><Input w='30%' mt='5' placeholder='email' onChange={(logdata)=>{setLogdata(logdata.email.target.value)}}  /></Center>
                <Center><Input w='30%' mt='5' placeholder='passsword' onChange={(logdata)=>{setLogdata(logdata.pass.target.value)}} /></Center> */}

                <Center><Input w='30%' mt='5' placeholder='email' onChange={(e)=>setEmail(e.target.value)}  /></Center>
                <Center><Input w='30%' mt='5' placeholder='passsword' type='password' onChange={(e)=>setPass(e.target.value)} /></Center>

                <Center> <Button mt='5' type="submit" onClick={userLogin}>Submit</Button></Center>
            </form>
            <Link to='/signup'><Center><Text mt='5'>Sign - up</Text></Center></Link>
        </Box>
    )
}