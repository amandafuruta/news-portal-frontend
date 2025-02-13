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
      <Flex 
      flexDirection='column' 
      w='100%'
      ml= {{base:'40px', lg:'300px'}}>
        <Flex 
        w='100%' 
        padding='10px 20px' 
        borderBottom={'2px solid #0891B2'}
        >
          {section == 'post' &&
            <Flex w='100%' justifyContent={'space-between'}>
            <Text color='#0891B2' fontSize={{base:'25px', md:'30px'}} fontWeight={500}>
              Postagens
            </Text>
            <Link href='add-edit-post'>
              <Button colorPalette='cyan' data-id='add_news'>
                Adicionar
              </Button>
            </Link>
            </Flex>
          }
          {section == 'user' &&
            <Text color='#0891B2' fontSize={{base:'25px', md:'30px'}} fontWeight={500}>
              Usuários
            </Text>
          }
        </Flex>        
        {section == 'post' &&
          <AdminPost/>
        }
      </Flex>
    </Flex>
  )
}