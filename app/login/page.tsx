import {Box, Text, Flex, Grid, GridItem, Image} from '@chakra-ui/react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

export default function Login(){
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
        backgroundColor='#fff'
        borderLeftRadius={'100px'}
        display='flex'
        alignItems='center'
        justifyContent='center'>
          <Box>
            <Text
            className='primary'
            textTransform={'uppercase'}
            fontSize='40px'
            fontWeight={600}>
              Login
            </Text>
          </Box>
        </Box>
    </Flex>
  )
}