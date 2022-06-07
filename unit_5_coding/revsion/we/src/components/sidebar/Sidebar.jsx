import { Box, Flex,Text,Image, Center, Button, Grid,GridItem, Link  } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
export const Sidebar = ()=>{
    const navigate = useNavigate();
    const [todo, setTodo] = useState([]);

    const getData = async()=>{
        const res = await axios.get("http://localhost:8080/todo_arr")
        .then((res)=>res.data)
        setTodo(res);
        // console.log(todo);
    }

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            getData()
            
        }
    },[])

    return (
        <Flex>
            <Box h='100vh' w='20%' borderRight='1px solid black'>
                <Box borderBottom='1px solid black' h='30vh' w='100%'>
                    <Center><Box w='40%' pt='5'><Image src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'></Image></Box> </Center>
                    <Center><Text mt='2'>Name : Atin Sahu</Text></Center>
                </Box>
                <Box borderBottom='1px solid black' h='60vh' w='100%' d='flex' justifyContent='center' >
                    <Box mt='5' >
                        <Box border='1px solid black' mt='3' w='150px'><Text p='2' >All : </Text></Box>
                        <Box border='1px solid black' mt='3'><Text p='2' >Personals : </Text></Box>
                        <Box border='1px solid black' mt='3'><Text p='2' >Officials : </Text></Box>
                        <Box border='1px solid black' mt='3'><Text p='2' >Others : </Text></Box>
                    </Box>
                </Box>
                <Box h='10vh' w='100%'>
                    <Box>
                        <Center><Button mt='5' onClick={()=>localStorage.removeItem('user-info',navigate('/'))}>Logout</Button></Center>
                    </Box>   
                </Box>
            </Box>
        </Flex>
    )
}