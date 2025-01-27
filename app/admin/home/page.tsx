'use client'
import Nav from "@/components/site/adminNav/page";
import AdminPost from "@/components/site/adminPost/page";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function AdminHome(){
  const [section, setSection] = useState('post')

  return(
    <Flex minH='100vh' >
      <Nav setSection={setSection}/>
      <Flex flexDirection='column' w='100%'>
        <Flex 
        w='100%' 
        padding='10px 20px' 
        borderBottom={'2px solid #0891B2'}
        justifyContent={'space-between'}>
          {section == 'post' &&
            <Text color='#0891B2' fontSize='30px' fontWeight={500}>
              Postagens
            </Text>
          }
          <Link href='add-edit-post'>
            <Button colorPalette='cyan'>
              Adicionar
            </Button>
          </Link>
        </Flex>
        <Flex 
        maxW='1000px' 
        w='100%' 
        justifyContent='center'
        mb='10px'
        mt='30px'>
          <Input 
            type='text'
            placeholder="Pesquisar por título" 
            flex="1" 
            mb='10px'
            maxW='500px'
            w='100%'
            border="none"
            borderBottom='1px solid #969696'
            _focus={{ border:"none" }}
          />   
        </Flex>
        {section == 'post' &&
          <AdminPost/>
        }
      </Flex>
    </Flex>
  )
}