'use client'
import Nav from "@/components/site/adminNav/page";
import AdminPost from "@/components/site/adminPost/page";
import { Button, Flex, Text } from "@chakra-ui/react";
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
        {section == 'post' &&
          <AdminPost/>
        }
      </Flex>
    </Flex>
  )
}