import { Box,
    Text,
    Center,
    Grid,
    GridItem,
    Input,
    Textarea,
    RadioGroup,
    Radio,
    Stack,  
    Button,
    Flex} from "@chakra-ui/react"

export  const Edit = ()=>{

    return (
        <Box h='100vh' w='100%' border='1px solid black'>
                <Grid p='5' templateColumns='repeat(3, 1fr)' gap={5}>
                    <GridItem >
                        <Box mt='10'>
                            <Input placeholder="Title" />
                            <Textarea  mt='5' placeholder='Description' />
                        </Box>
                        <RadioGroup >
                            <Stack mt='10' direction='column'>
                                <Radio value='1'>Todo</Radio>
                                <Radio value='2'>In Progress</Radio>
                                <Radio value='3'>Done</Radio>
                            </Stack>
                        </RadioGroup>
                    </GridItem >
                    <GridItem >
                        <Box mt='10' display='flex' justifyContent='space-between'>  
                            <Input w='75%' placeholder="subtask"/>
                            <Button border='1px solid black' >Add</Button>
                        </Box>
                    </GridItem >
                    <GridItem >
                        <Box mt='10'>
                            <Input placeholder="Date" type='date' />
                            <Button mt='5' w='100%'>Create Task</Button>
                        </Box>   
                    </GridItem >
                </Grid>
        </Box>
    )
}