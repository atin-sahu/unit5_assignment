import { Box, Text } from "@chakra-ui/react"

export const Summary = ()=>{

    return (
        <Box>
            <Box p='10'>
                <Text >Summary</Text>
                <Box border='1px solid black' mt='5' p='2' w='20%'><Text>Todo : </Text></Box>
                <Box border='1px solid black' mt='5' p='2' w='20%'><Text>Done : </Text></Box>
                <Box border='1px solid black' mt='5' p='2' w='20%'><Text>Inprogress : </Text></Box>
            </Box>
        </Box>
    )
}