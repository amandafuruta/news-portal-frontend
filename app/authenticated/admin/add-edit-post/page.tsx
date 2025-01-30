'use client' 
import { Field } from "@/components/ui/field";
import { 
  Box, 
  Text, 
  Flex, 
  Stack, 
  Input, 
  Button, 
  Spinner, 
  SelectRoot, 
  SelectLabel, 
  SelectTrigger, 
  SelectValueText, 
  SelectContent, 
  SelectItem, 
  createListCollection, 
  Textarea,
  Image
} from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdArrowBack } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { IoIosClose } from "react-icons/io";

interface IFormInput {
  title: string
  subtitle: string
  category?: string
  auth: string
  body: string
  image: FileList | string
  alt: string
  section: number | null
  order: number | null
}

const category = createListCollection({
  items: [
    { label: "Saúde", value: "Saúde" },
    { label: "Política", value: "Política" },
    { label: "Economia", value: "Economia" }
  ],
})

export default function AddEditPost(){
  const [loading, setLoading] = useState(false)
      , [categoryValue, setCategoryValue] = useState<string>('')
      , [displayImage, setDisplayImage] = useState<boolean>(false)
      , { register, handleSubmit, formState: { errors }, reset, setValue  } = useForm<IFormInput>()  
      , searchParams = useSearchParams()
      , itemId = searchParams.get('post')  
      , [post, setPost]= useState<IFormInput| null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (itemId) {
        try {
          const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/${itemId}/`)
          
          if (res.ok) {
            const postData = await res.json();
        
            setPost(postData);
            setDisplayImage(true)
            // Set default values for form fields dynamically
            setValue('title', postData.title);
            setValue('subtitle', postData.subtitle);
            setValue('auth', postData.auth);
            setValue('body', postData.body);
            setValue('alt', postData.alt);
            setValue('section', postData.section);
            setValue('order', postData.order);
            setCategoryValue(postData.category);
          } else {
            console.error('Failed to fetch post')
          }
        } catch (error) {
          console.error('Error fetching post:', error)
        }
      }
    };
  
    fetchPost()
  }, [itemId])
  
  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    setLoading(true)

    const formData = new FormData();
    formData.append("title", data.title)
    formData.append("subtitle", data.subtitle)
    formData.append("auth", data.auth)
    formData.append("body", data.body)       
    formData.append("alt", data.alt)        
    formData.append("datePublished", new Date().toISOString())

    if(categoryValue == ''){
      formData.append("category", category.items[0].value)      
    } else{
      formData.append("category", categoryValue)
    }

    if (data.image instanceof FileList && data.image[0]) {
      formData.append("image", data.image[0]);
    } else if (typeof data.image === "string") {
      formData.append("image", data.image);
    }

    if (data.section !== null) {
      formData.append("section", data.section.toString())
    }
  
    if (data.order !== null) {
      formData.append("order", data.order.toString())
    }

    const savePost = async (method: 'POST' | 'PUT', url: string) => {
      try {
        const res = await fetch(url, {
          method,
          body: formData,
        })
    
        if (res.ok) {
          const successMessage = method === 'POST' ? "Criado com sucesso" : "Editado com sucesso"
          toast.success(successMessage)
          if(method === 'POST'){
            reset()
          } 
        } else {
          toast.error("Ops, ocorreu um erro")
        }
      } catch (error) {
        console.error(error)
        toast.error("Ops, ocorreu um erro")
      } finally {
        setLoading(false)
      }
    }
    
    const url = itemId 
      ? `${process.env.PUBLIC_API_URL}/posts/${itemId}/` 
      : `${process.env.PUBLIC_API_URL}/posts/`
    
    const method = itemId ? 'PUT' : 'POST'
    
    setLoading(true)
    savePost(method, url)
  }
  
  return(
    <Box className='bgAdmin' minH='100vh' display="flex" flexDirection="column" py='50px' px='10px'>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box className='container'  mb='30px'>
        <Link href='/authenticated/admin/home'>
          <Flex alignItems='center'>
            <MdArrowBack color='#0891B2' size={20}/>
            <Text fontSize='16px' >Voltar</Text>
          </Flex>
        </Link>
      </Box>
      <Flex 
        className='container'
        alignItems='center'
        justifyContent='center'
        flex="1" >      
          <Flex 
          backgroundColor='#fff'
          borderRadius='20px'
          w='100%'
          padding='40px 10px'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          paddingX='20px'>
            {
              itemId?
              <Text color='#0891B2' fontWeight={600} fontSize='20px' mb='20px'>
                Editar Post
              </Text>
              :
              <Text color='#0891B2' fontWeight={600} fontSize='20px' mb='20px'>
                Adicionar Post
              </Text>
            }
            <Stack 
              as='form' 
              onSubmit={handleSubmit(onSubmit)} 
              gap='4' 
              w='100%'
              alignItems='center'>
                {/* Title */}
                <Box position='relative' w='100%'>                
                  <Field label='Título'>
                    <Input 
                    border='1px solid #969696'
                    mb='10px'
                    type='text'
                    defaultValue={post?.title}
                    {...register("title", { required: "Campo obrigatório" })} />                  
                  </Field>
                  {errors.title && 
                    <Text 
                    color="red.500" 
                    fontSize="sm"
                    position='absolute'
                    bottom={-3}>
                      {errors.title.message}
                    </Text>
                  }
                </Box>
                {/* SubTitle */}
                <Box position='relative' w='100%'>                
                  <Field label='Subtítulo'>
                    <Input 
                    border='1px solid #969696'
                    mb='10px'
                    type='text'
                    defaultValue={post?.subtitle}
                    {...register("subtitle", { required: "Campo obrigatório" })} />                  
                  </Field>
                  {errors.subtitle && 
                    <Text 
                    color="red.500" 
                    fontSize="sm"
                    position='absolute'
                    bottom={-3}>
                      {errors.subtitle.message}
                    </Text>
                  }
                </Box>
                {/* Category */}
                <Box position='relative' w='100%'>
                  <SelectRoot collection={category} 
                  size="sm" 
                  width="100%"
                  mb='10px' 
                  value={categoryValue !=''? [categoryValue]: [category.items[0].value]}
                  onValueChange={(details) => {
                    const value = details.value; 
                    setCategoryValue(value[0]); 
                  }}
                  >
                    <SelectLabel>Selecione a categoria</SelectLabel>
                    <SelectTrigger>
                      <SelectValueText />
                    </SelectTrigger>
                    <SelectContent>
                      {category.items.map((categoryChild) => (
                        <SelectItem item={categoryChild} key={categoryChild.value}>
                          {categoryChild.label}
                        </SelectItem>
                      ))}
                    </SelectContent>                    
                  </SelectRoot>
                  {errors.category && 
                    <Text 
                    color="red.500" 
                    fontSize="sm"
                    position='absolute'
                    bottom={-13}>
                      {errors.category.message}
                    </Text>
                  }
                </Box>
                {/* Auth */}
                <Box position='relative' w='100%'>                
                  <Field label='Autor'>
                    <Input 
                    border='1px solid #969696'
                    mb='10px'
                    type='text'
                    defaultValue={post?.auth}
                    {...register("auth", { required: "Campo obrigatório" })} />                  
                  </Field>
                  {errors.auth && 
                    <Text 
                    color="red.500" 
                    fontSize="sm"
                    position='absolute'
                    bottom={-3}>
                      {errors.auth.message}
                    </Text>
                  }
                </Box>
                {/* Body */}
                <Box position='relative' w='100%'>
                  <Field label='Texto'>
                    <Textarea  
                      border='1px solid #969696'
                      mb='10px'
                      defaultValue={post?.body}
                      {...register("body", { required: "Campo obrigatório" })} />                  
                    </Field>
                    {errors.body && 
                      <Text 
                      color="red.500" 
                      fontSize="sm"
                      position='absolute'
                      bottom={-3}>
                        {errors.body.message}
                      </Text>
                    }
                </Box>
                {/* Image */}
                <Box position='relative' w='100%'>
                  {displayImage?
                    <Box position='relative' pr='30px' maxW='300px' w='100%'>
                      <Box 
                      position='absolute' 
                      right='0'
                      cursor='pointer'
                      onClick={()=>setDisplayImage(false)}>
                        <IoIosClose color='red' size={25}/>
                      </Box>
                      <Box w='100%' >
                        <Image src={post?.image as string} w='100%'/>
                      </Box>
                    </Box>
                  :
                    <>
                    <Input
                      type="file"
                      mb='10px'
                      {...register("image", { 
                        required: itemId ? false : "Campo obrigatório" 
                      })}
                    />                    
                    {errors.image && 
                      <Text 
                      color="red.500" 
                      fontSize="sm"
                      position='absolute'
                      bottom={-13}>
                        {errors.image.message}
                      </Text>
                    }
                    </>
                  }
                </Box>
                {/* Alt */}
                <Box position='relative' w='100%'>                
                  <Field label='Legenda da imagem'>
                    <Input 
                    border='1px solid #969696'
                    mb='10px'
                    type='text'
                    defaultValue={post?.alt}
                    {...register("alt", { required: "Campo obrigatório" })} />                  
                  </Field>
                  {errors.alt && 
                    <Text 
                    color="red.500" 
                    fontSize="sm"
                    position='absolute'
                    bottom={-3}>
                      {errors.alt.message}
                    </Text>
                  }
                </Box>
                <Flex position='relative' w='100%' mb='20px'>
                  <Field label='Seção' mr='20px'>
                    <Input 
                    border='1px solid #969696'
                    mb='10px'
                    type='number'
                    defaultValue={post?.section  ?? 0}
                    {...register("section")} />                  
                  </Field>
                  <Field label='Ordem'>
                    <Input 
                    border='1px solid #969696'
                    mb='10px'
                    type='number'
                    defaultValue={post?.order  ?? 0}
                    {...register("order")} />                  
                  </Field>
                </Flex>
                <Button maxW='200px' w='100%' type="submit" >
                  {
                    loading?
                    <Spinner/>
                    :
                    itemId?
                      <Text>Editar</Text>
                      :
                      <Text>Cadastrar</Text>                    
                  }
                </Button>
              </Stack>
          </Flex>
        </Flex>
    </Box>
  )
}