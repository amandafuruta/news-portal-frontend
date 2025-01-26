'use client' 
import { SubmitHandler, useForm } from 'react-hook-form';
import { Field } from '@/components/ui/field';
import {Box, Text, Flex, Stack, Input, Button } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';

interface IFormInput {
  first_name: string
  last_name: string
  email: string
  password: string
}

export default function Signup({ setSignupDisplay }: { setSignupDisplay: React.Dispatch<React.SetStateAction<boolean>> }){
  const { register, handleSubmit, formState: { errors }, reset   } = useForm<IFormInput>()
  , onSubmit: SubmitHandler<IFormInput> = async(data) => {
    const newData={
      first_name : data.first_name,
      last_name : data.last_name,
      username : data.email,
      email : data.email,
      password : data.password
    }
  
    const res = await fetch(`${process.env.PUBLIC_API_URL}/users/`, {
      'method': 'POST',
      'body': JSON.stringify(newData),
      'headers': { 
        'Content-Type': 'application/json'
      }
    })

    const resData = await res.json()

    if (res.ok) {
      toast.success("Cadastrado com sucesso!");
      reset();  
    }

    if (!res.ok) {
      if(resData.username[0]){
        toast.error('Esse e-mail já está cadastrado.');
      } else {
        toast.error("Ops, ocorreu um erro");
      }
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
      fontSize='37px'
      fontWeight={600}
      mb='20px'>
        Registrar
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
            border='1px solid #969696'
            mb='10px'
            placeholder="Primeiro nome" 
            flex="1" 
            type='text'
            {...register("first_name", { required: "Primeiro nome é obrigatório" })} />                  
          </Field>
          {errors.first_name && 
            <Text 
            color="red.500" 
            fontSize="sm"
            position='absolute'
            bottom={-3}>
              {errors.first_name.message}
            </Text>
          }
        </Box>
        <Box position='relative' w='100%'>
          <Field orientation="horizontal">
            <Input 
            border='1px solid #969696'
            mb='10px'
            placeholder="Sobrenome" 
            flex="1" 
            type='text'
            {...register("last_name", { required: "Sobrenome é obrigatório" })} />                  
          </Field>
          {errors.last_name && 
            <Text 
            color="red.500" 
            fontSize="sm"
            position='absolute'
            bottom={-3}>
              {errors.last_name.message}
            </Text>
          }
        </Box>
        <Box position='relative' w='100%'>
          <Field orientation="horizontal">
            <Input 
            border='1px solid #969696'
            mb='10px'
            placeholder="E-mail" 
            flex="1" 
            type='email'
            {...register("email", { required: "E-mail é obrigatório" })} />                  
          </Field>
          {errors.email && 
            <Text 
            color="red.500" 
            fontSize="sm"
            position='absolute'
            bottom={-3}>
              {errors.email.message}
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
          Cadastrar
        </Button>
      </Stack>
      <Flex 
      flexDirection='column'
      alignItems='center'
      mt='20px'>         
        <Text 
        className='primary'
        fontWeight={600}
        cursor='pointer'
        _hover={{
          fontWeight: 700
        }}
        onClick={() => setSignupDisplay(false)}>
          Login
        </Text>
      </Flex>
    </Flex>
  )
}