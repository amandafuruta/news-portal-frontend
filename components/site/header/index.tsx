'use client'
import { Box , Image, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { useCookies } from 'react-cookie'

export default function Header(){
  const [cookies, , removeCookie] = useCookies(['user_token'])

  return(
    <Box position='fixed' top={0} w='100%' zIndex={2} backgroundColor='#fff'>
      <Box className="container" >
        <Box 
        my='20px' 
        display='flex' 
        justifyContent='space-between'
        alignItems='center'>
          <Link href='/'>
            <Box cursor='pointer'>
              <Image src='https://www.jota.info/images/meta/jotalogo.svg'/>
            </Box>
          </Link>
          <Box display='flex'>
            {
              cookies.user_token?
              <Link href='/authenticated/reader-profile'>
                <Text 
                className="primary" 
                mr='20px'
                fontSize='18px'
                fontWeight={600}>
                  Meu perfil
                </Text>
              </Link>
              :
              <Link href='/login'>
                <Text 
                className="primary" 
                mr='20px'
                fontSize='18px'
                fontWeight={600}>
                  Entrar
                </Text>
              </Link>
            }
          </Box>
        </Box>        
      </Box>
      <Box className="bgPrimary" py='20px'>
        {/* Desk */}
        <Box className="container" display='flex' justifyContent='space-between'>
          <Link href='/power'>
            <Text className='menuOption'>
              Poder
            </Text>
          </Link>
          <Link href='/taxes'>
            <Text className='menuOption'>
              Taxas
            </Text>
          </Link>
          <Link href='/health '>
            <Text className='menuOption'>
              Saúde  
            </Text>
          </Link>
          <Link href='/energy'>
            <Text className='menuOption'>
              Energia 
            </Text>
          </Link>
          <Link href='/opinion-and-analysis'>
            <Text className='menuOption'>
              Opinião e análise
            </Text>
          </Link>
          <Link href='/special-coverage'>
            <Text className='menuOption'>
              Coberturas especiais
            </Text>
          </Link>
          <Link href='/studio'>
            <Text className='menuOption'>
              Estúdio Jota
            </Text>
          </Link>
          <Link href='/newsletters '>
            <Text className='menuOption'>
              Newsletters 
            </Text>
          </Link>          
        </Box>
      </Box>
    </Box>
  )
}