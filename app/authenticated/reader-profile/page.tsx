'use client'
import Footer from "@/components/site/footer/page";
import Header from "@/components/site/header";
import { Box, Text, Button, Spinner } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface User{
  email: string
  first_name: string
  id: number
  last_name: string
  username:  string
}

export default function ReaderProfile(){
  const [loading, setLoading] = useState(false)
      , [cookies, , removeCookie] = useCookies(['user_token'])
      , [user, setUser]= useState<User | null>(null)
  
  useEffect(()=> {
    const getUserInfo = async () => {
      const token = cookies.user_token
    
      const res = await fetch(`${process.env.PUBLIC_API_URL}/user-info/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`, 
        }
      });
    
      const resData = await res.json()
      setUser(resData)
    }
    
    try{
      getUserInfo()
    } catch (error){
      console.log(error)
    }

  }, [cookies.user_token])

  function Logout(){
    setLoading(true)
    removeCookie('user_token')
    redirect('/')
  }

  return(
    <>
    <Header />
    <Box minH='100vh' pt='200px'>
      <Box className='container' 
      display='flex'
      flexDirection='column'
      alignItems='center'>
        <Text fontSize={'20px'} mb='20px'>
          Bem-vindo, {user?.first_name} !
        </Text>
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