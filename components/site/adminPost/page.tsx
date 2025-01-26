'use client'
import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegTrashAlt, FaRegEdit  } from "react-icons/fa";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastContainer, toast } from 'react-toastify';

interface Post{
  id: number
  category: string
  title: string 
  subtitle: string
  auth: string
  body: string
  datePublished: string
  dateUpdated: string
  image: string
  alt: string
  order: number
  section: number
}

export default function AdminPost(){
  const [postList, setPostList] = useState<Post[]>([])
      , [selectedPost, setSelectedPost] = useState(0)

  const getPostList = async () => {
    try {
      const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/`)
          , resData = await res.json()

      setPostList(resData); 
              
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []); 

  const handleDeleteClick = async() => {
    async function deletePost() {
      try {
        const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/${selectedPost}/`, {
         'method': 'DELETE',
         headers: {
          'Content-Type': 'application/json'
        },
        });

        if (res.ok) {
          toast.success("Deletado com sucesso");
          await getPostList()
        } else{
          toast.error("Ops, ocorreu um erro");
        }

      } catch (error) {
        console.log(error)
        toast.error("Ops, ocorreu um no servidor");
      }
    }
  
    deletePost();
  };

  if(postList.length == 0){
    return(
      <Flex alignItems='center' justifyContent='center'>
        <Spinner/>
      </Flex>
    )
  }
  
  return(
    <DialogRoot>
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
      <Flex justifyContent='center' w='100%' pt='20px'>      
        <Box maxW='1000px' w='100%'>
          {postList.map((post, index)=> 
            <Flex key={index} mb='20px' alignItems='center'>
              <Box 
              maxW='100px' 
              w='100%'
              h='80px' 
              borderRadius='5px' 
              overflow='hidden'
              mr='20px'>
                <Image src={post.image} alt={post.alt}  w='100%' h='100%' />
              </Box>
              <Flex 
              flexDirection='column' 
              maxW='700px'
              w='100%'
              mr='40px'>
                <Text 
                fontWeight={500} 
                color='#646363'
                fontSize='18px'
                mb='5px'>
                  {post.title}
                </Text>
                <Text
                fontWeight={500} 
                color='#c4bebe'
                fontSize='15px'>
                  {post.datePublished}
                </Text>
              </Flex>
              <Flex>
                <Link 
                href={`/admin/post/${post.id}`}
                >
                  <FaRegEdit  size={20} style={{marginRight:'20px'}}/>
                </Link>
                <DialogTrigger asChild>
                  <FaRegTrashAlt 
                    color='#f30c0c' 
                    size={20} 
                    style={{cursor:'pointer'}}
                    onClick={() => setSelectedPost(post.id)}/>
                </DialogTrigger>                    
              </Flex>
            </Flex>
          )}
        </Box>      
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deseja realmente deletar?</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>
              Uma vez excluído, não há possibilidade de reverter a ação.
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <DialogActionTrigger asChild>
              <Button 
              bgColor='#f30c0c'
              onClick={handleDeleteClick}>
                Deletar
              </Button>
            </DialogActionTrigger>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </Flex>
    </DialogRoot>
  )
}