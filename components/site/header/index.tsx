'use client'
import { Box , Image, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { IoMenu } from "react-icons/io5";

const menuOptions=[
  {
    label: 'power',
    path: 'Poder'
  },
  {
    label: 'Taxas',
    path: 'taxes'
  },
  {
    label: 'Saúde',
    path: 'health'
  },
  {
    label: 'Energia',
    path: 'energy'
  },
  {
    label: 'Opinião e análise',
    path: 'opinion-and-analysis'
  },
  {
    label: 'Coberturas especiais',
    path: 'special-coverage'
  },
  {
    label: 'Estúdio Jota',
    path: 'studio'
  },
  {
    label: 'Newsletters',
    path: 'newsletters'
  }
]

export default function Header(){
  const [cookies, , removeCookie] = useCookies(['user_token'])
      , [mobileMenu, setMobileMenu] = useState(false)
      , [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, []);

  if (!loaded) {
    return null;
  }

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
              <Link href='/login'  data-id='login-header-btn'>
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
        <Box className="container" display={{base:'none', lg:'flex'}} justifyContent='space-between'>
          {menuOptions.map((option, index)=> 
            <Link href={`/${option.path}`} key={index}>
              <Text className='menuOption'>
                {option.label}
              </Text>
            </Link>                                                 
          )}
        </Box>
        {/* Mobile */}
        <Box 
        display={{base:'flex', lg:'none'}} 
        justifyContent='flex-end'
        padding='0px 50px 0px'>
          <IoMenu color='#fff' size={15} onClick={()=> setMobileMenu(!mobileMenu)}/>
        </Box>
        <Box 
        className="container" 
        display={{base: mobileMenu ? 'flex' : 'none', lg:'none'}}
        flexDirection='column'>
          {menuOptions.map((option, index)=> 
            <Link href={`/${option.path}`}  key={index}>
              <Text className='menuOption'>
                {option.label}
              </Text>
            </Link>                                                 
          )}
        </Box>
      </Box>
    </Box>
  )
}