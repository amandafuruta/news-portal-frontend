'use client' 
import SignIn from '@/components/site/signIn/page';
import Signup from '@/components/site/signup/page';
import {Box, Text, Flex, Image} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";

export default function Login(){
  const [signupDisplay, setSignupDisplay] = useState(false)

  return(
    <Flex
      w="100%"
      minH='100vh'
      h='100vh'
      backgroundImage='url("./bg.png")' 
      backgroundRepeat="repeat"
      mixBlendMode="multiply"          
      backgroundBlendMode='multiply'
      backgroundColor='rgba(0, 0, 0, 0.9) '>
        <Box 
        w='50%'
        h='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
        position='relative'>
          <Link href='/'>
            <Flex 
            position='absolute'
            top={10}
            left={10}>
              <FaArrowLeft className='primary' size={20}/>
              <Text className='primary' ml='10px'>
                Voltar
              </Text>
            </Flex>
          </Link>
          <Box maxW='300px' w='50%'>
            <Image src='https://www.jota.info/images/meta/jotalogo.svg' w='100%'/>
          </Box>
        </Box>
        <Box 
        position='absolute'
        right='0'
        w='55vw'
        h='100%' 
        backgroundColor='#e4e2e2'
        borderLeftRadius={'100px'}
        display='flex'
        alignItems='center'
        justifyContent='center'>
          {signupDisplay?
          <Signup setSignupDisplay={setSignupDisplay}/>
        :
          <SignIn setSignupDisplay={setSignupDisplay}/>
        }
        </Box>
    </Flex>
  )
}

