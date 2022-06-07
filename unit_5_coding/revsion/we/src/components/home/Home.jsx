import { Box, Flex,Text,Image, Center, Button, Grid,GridItem  } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios";

export const Home = ()=>{
    const [todo,setTodo] = useState([]);

    // useEffect(()=>{
    //     getTodo();
    // },[])

    const getTodo = async()=>{
        let data = await axios.get("http://localhost:8080/todo_arr")
        // .then((data)=>(setTodo(data.data)));
        setTodo(data.data);
        console.log(todo);
    }

   useEffect(()=>{
       getTodo();
   },[])

    return (
        <Box h='100vh' w='100%' border='1px solid black'>
            <Box h='100vh' w='80%'>
                <Grid p='5' templateColumns='repeat(3, 1fr)' gap={5}>
                    <GridItem  border='1px solid black' w='95%'>
                        <Box p='3' borderBottom='1px solid black'>
                            <Center><Text>Todo</Text></Center>
                        </Box>
                        <Box>
                            <Box>
                                {todo.map((e)=>{
                                    return e.status == "todo" ? <Text>{e.task}</Text> : null
                                })}  
                            </Box>
                        </Box>
                    </GridItem >
                    <GridItem  border='1px solid black' w='95%'>
                        <Box p='3' borderBottom='1px solid black'>
                            <Center><Text>In Progress</Text></Center>
                        </Box>
                        <Box>
                            <Box>
                                {todo.map((e)=>{
                                    return e.status == "inProgress" ? <Text>{e.task}</Text> : null
                                })}  
                            </Box>
                        </Box>
                    </GridItem >
                    <GridItem  border='1px solid black' h='95vh' w='100%'>
                        <Box p='3' borderBottom='1px solid black'>
                            <Center><Text>Done</Text></Center>
                        </Box>
                        <Box>
                            <Box>
                                {todo.map((e)=>{
                                    return e.status == "done" ? <Text>{e.task}</Text> : null
                                })}  
                            </Box>
                        </Box>
                    </GridItem >
                </Grid>
            </Box>
        </Box>
    )
}