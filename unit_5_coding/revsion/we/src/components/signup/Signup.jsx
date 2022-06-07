import { Box, Center,Text,Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

export const Signup = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signUp = async (event)=>{
        event.preventDefault();

        const payload = {
            name:name,
            email: email,
            password : pass,
        }
        try {
            const res = await axios.post("https://reqres.in/api/register",payload)
            .then((res)=>(res.data));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        
        

    }
    return (
        <Box>
            <Center><Text>Sign - up</Text></Center>
            <form >
                <Center><Input w='30%' mt='5' placeholder='name' onChange={(e)=>{setName(e.target.value)}} /></Center>
                <Center><Input w='30%' mt='5' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} /></Center>
                <Center><Input w='30%' mt='5' placeholder='passsword' type='password' onChange={(e)=>{setPass(e.target.value)}} /></Center>
                <Center> <Button mt='5' type="submit" onClick={signUp}>Submit</Button></Center>
            </form>
            <Link to='/signin'><Center><Text mt='5'>Sign - in</Text></Center></Link>
        </Box>
    )
}