import { Box, Image, Flex, Stack, Text, Button } from '@chakra-ui/react';

interface NavProps {
  setSection: React.Dispatch<React.SetStateAction<string>>
}
export default function Nav({ setSection }: NavProps){
  return(
    <Flex as='nav' className='bgAdmin'       
    maxW='300px'
    w='100%'
    alignItems='center'
    padding='20px 10px'
    flexDirection='column'>
      <Box maxW='100px' w='50%' mb='40px'>
        <Image src='https://www.jota.info/images/meta/jotalogo.svg' w='100%'/>
      </Box>
      <Stack w='100%'>
        <Button colorPalette='cyan' onClick={() => setSection("post")}>
          Post
        </Button>
        <Button colorPalette='cyan' onClick={() => setSection("user")}>
          Usuários
        </Button>
      </Stack>
    </Flex>
  )
}