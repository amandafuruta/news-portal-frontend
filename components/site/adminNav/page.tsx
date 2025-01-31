import { Box, Image, Flex, Stack, Button, Spinner, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from "react-cookie";

interface NavProps {
  setSection: React.Dispatch<React.SetStateAction<string>>
}
export default function Nav({ setSection }: NavProps){
  const [loading, setLoading] = useState(false)
      , [cookies, , removeCookie] = useCookies(['userteam_token'])

  function Logout(){
    setLoading(true)
    removeCookie('userteam_token')
    redirect('/admin-login')
  }

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
        <Button backgroundColor='#033846' onClick={Logout}>
          {
            loading?
              <Spinner/>
            :
            <Text>Sair</Text>
          }
        </Button>
      </Stack>
    </Flex>
  )
}