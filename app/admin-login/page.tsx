'use client' 
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Flex, Image, Input, Spinner, Stack, Text} from "@chakra-ui/react";
import { useState } from "react";
import { Field } from '@/components/ui/field';
import { redirect } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

interface IFormInput {
  username: string
  password: string
}

export default function AdminLogin(){
  const [loading, setLoading] = useState(false)
      , { register, handleSubmit, formState: { errors }  } = useForm<IFormInput>()  
      , setCookie = useCookies()[1]        
      , onSubmit: SubmitHandler<IFormInput> = async(data) => {
        setLoading(true)
        const res = await fetch(`${process.env.PUBLIC_API_URL}/token-team-auth/`,  {
          'method': 'POST',
          'body': JSON.stringify(data),
          'headers':{
            'Content-type': 'application/json'
          }
        })

        const resData = await res.json()

        if (res.status === 401){
          setLoading(false)
          toast.error("Acesso restrito a membros do time");
        } else if (res.status === 400){
          setLoading(false)
          toast.error("Dados inválidos");
        } else if(res.ok){
          setCookie('userteam_token', resData.token)
          redirect('/authenticated/admin/home')
        }
      }
      
  return(
    <Flex 
    className='bgAdmin'
    minH='100vh'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Flex 
      className='container'
      alignItems='center'
      justifyContent='center'>      
        <Flex 
        backgroundColor='#fff'
        borderRadius='20px'
        maxW='500px'
        w='100%'
        padding='40px 10px'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
          <Box maxW='100px' w='50%' mb='40px'>
            <Image src='https://www.jota.info/images/meta/jotalogo.svg' w='100%'/>
          </Box>
          <Stack 
            as='form' 
            onSubmit={handleSubmit(onSubmit)} 
            gap='4' 
            maxW='300px'
            w='100%'
            alignItems='center'>
              <Box position='relative' w='100%'>
                <Field orientation="horizontal">
                  <Input 
                  border='1px solid #969696'
                  mb='10px'
                  placeholder="E-mail" 
                  flex="1" 
                  type='email'
                  {...register("username", { required: "E-mail é obrigatório" })} />                  
                </Field>
                {errors.username && 
                  <Text 
                  color="red.500" 
                  fontSize="sm"
                  position='absolute'
                  bottom={-3}>
                    {errors.username.message}
                  </Text>
                }
              </Box>
              <Box position='relative' w='100%'>
                <Field orientation="horizontal" >
                  <Input 
                  placeholder='Senha'
                  type='password'
                  flex="1"
                  border='1px solid #969696'
                  mb='20px' 
                  {...register("password", { required: "Senha é obrigatório", minLength: {value: 8, message: "A senha deve ter pelo menos 8 caracteres"} })} />
                </Field>              
                {errors.password && 
                  <Text 
                  color="red.500"
                  fontSize="sm"
                  position='absolute'
                  bottom={0}>
                    {errors.password.message}
                  </Text>
                }
              </Box>
              <Button maxW='200px' w='100%' type="submit" >
                {
                  loading?
                  <Spinner/>
                  :
                  <Text>Entrar</Text>
                }
              </Button>
            </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}