'use client' 
import { SubmitHandler, useForm } from 'react-hook-form';
import { Field } from '@/components/ui/field';
import {Box, Text, Flex, Stack, Input, Button, Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

interface IFormInput {
  username: string
  password: string
}

export default function SignIn({ setSignupDisplay }: { setSignupDisplay: React.Dispatch<React.SetStateAction<boolean>> }){
  const [loading, setLoading] = useState(false)
    , setCookie = useCookies()[1]
    , { register, handleSubmit, formState: { errors }  } = useForm<IFormInput>()    
    , router = useRouter()
    , onSubmit: SubmitHandler<IFormInput> = async(data) => {
      setLoading(true)

      try{
        const res = await fetch(`${process.env.PUBLIC_API_URL}/token-auth/`, {
          'method': 'POST',
          'body': JSON.stringify(data),
          'headers': { 
            'Content-Type': 'application/json'
          }
        })
  
        const resData = await res.json()
        
        if (res.ok) {
          setCookie('user_token', resData.token)
          router.push('/authenticated/reader-profile')
        }
  
        if (!res.ok) {
          setLoading(false)
          if(resData.non_field_errors){
            toast.error("E-mail ou senha incorreto");
          } else {
            toast.error("Ops, ocorreu um erro");
          }          
        }
      } catch (error) {
        toast.error("Erro na requisição. Tente novamente.")
        console.error("Login failed:", error)
      } finally {
        setLoading(false);
      }
    }

  return(
    <Flex 
    flexDirection='column'
    alignItems='center'
    maxWidth='300px'
    w='100%'>
      <Text
      className='primary'
      textTransform={'uppercase'}
      fontSize='40px'
      fontWeight={600}
      mb='20px'>
        Login
      </Text>
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
      <Stack 
      as='form' 
      onSubmit={handleSubmit(onSubmit)} 
      gap='4' 
      w='100%'
      alignItems='center'>
        <Box position='relative' w='100%'>
          <Field orientation="horizontal">
            <Input 
            data-id="username-field"
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
            data-id="password-field"
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
        <Button maxW='200px' w='100%' type="submit" data-id="login-enter-btn">
          {
            loading?
            <Spinner/>
            :
            <Text>Entrar</Text>
          }
        </Button>
      </Stack>
      <Flex 
      flexDirection='column'
      alignItems='center'
      mt='20px'>
          <Link href=''>
            <Text 
            cursor='pointer'
            _hover={{
              fontWeight: 600
            }}>
              Esqueci minha senha
            </Text>
          </Link>          
          <Text 
          className='primary'
          fontWeight={600}
          cursor='pointer'
          _hover={{
            fontWeight: 700
          }}
          onClick={() => setSignupDisplay(true)}>
            Criar conta
          </Text>
      </Flex>
    </Flex>
  )
}