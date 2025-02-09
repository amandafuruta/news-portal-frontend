import { Box, Image, Flex, Stack, Button, Spinner, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from "react-cookie";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

interface NavProps {
  setSection: React.Dispatch<React.SetStateAction<string>>
}

export default function Nav({ setSection }: NavProps){
  const [loading, setLoading] = useState(false)
      , [cookies, , removeCookie] = useCookies(['userteam_token'])
      , [openMenu, setOpenMenu] = useState(false)

  function Logout(){
    setLoading(true)
    removeCookie('userteam_token')
    redirect('/admin-login')
  }

  return(
    <>
    <Box
    position='fixed'
    display={{base:'flex', lg: 'none'}}
    backgroundColor='#0891B2'
    left={'0'}
    top='50px'
    borderRightRadius='10px'
    padding='10px'
    onClick={() => setOpenMenu(true)}>
      <FiMenu color='#fff' size={20}/>
    </Box>
    <Flex 
    as='nav' 
    className='bgAdmin'
    id='menuMobile'       
    maxW={{base:'250px', lg:'300px'}}
    w='100%'
    alignItems='center'
    padding='20px 10px'
    flexDirection='column'
    position='fixed'
    left={{base: openMenu? '0px' : '-250px', lg:'0px'}}
    transform={{ base: openMenu ? 'translateX(0)' : 'translateX(-250px)', lg: 'translateX(0)' }}
    h='100vh'
    transition= 'transform 0.8s ease'
    zIndex={2}>
      <Box 
      w='100%' 
      justifyContent='end'
      cursor='pointer'
      display={{base:'flex', lg: 'none'}}
      onClick={() => setOpenMenu(false)}>
        <MdClose color='#000' size={20}/>
      </Box>
      <Box maxW='100px' w='50%' mb='40px'>
        <Image src='https://www.jota.info/images/meta/jotalogo.svg' w='100%'/>
      </Box>
      <Stack w='100%'>
        <Button colorPalette='cyan' onClick={() => [setSection("post"), setOpenMenu(false)]}>
          Post
        </Button>
        {/* <Button colorPalette='cyan' onClick={() => setSection("user")}>
          Usuários
        </Button> */}
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
    </>
  )
}