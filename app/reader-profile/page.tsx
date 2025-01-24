'use client'
import Footer from "@/components/site/footer/page";
import Header from "@/components/site/header";
import { Box, Text, Button, Spinner } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ReaderProfile(){
  const [loading, setLoading] = useState(false);
  
  function Logout(){
    setLoading(true)
    localStorage.removeItem('user_token')
    redirect('/')
  }

  return(
    <>
    <Header />
    <Box minH='100vh' pt='155px'>
      <Box className='container'>
        <Text>Here's my profile page</Text>
        <Button className='bgPrimary' onClick={() => Logout()}>
          {
            loading?
            <Spinner/>
            :
            <Text>Sair</Text>
          }          
        </Button>
      </Box>
    </Box>
    <Footer />
    </>
  )
}