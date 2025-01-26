'use client'
import { Box, Button, Flex, Image, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegTrashAlt, FaRegEdit  } from "react-icons/fa";

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
      // , { isOpen, onOpen, onClose } = useDisclosure()
      , [selectedPost, setSelectedPost] = useState<Post | null>(null)

  useEffect(() => {
    async function getPostList() {
      try {
        const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/`);
        const resData = await res.json();
        console.log(resData);  
        setPostList(resData)         
      } catch (error) {
        console.error(error);
      }
    }
  
    getPostList();
  }, []); 

  const handleDeleteClick = (post: Post) => {
    setSelectedPost(post);
    // onOpen(); 
  };

  if(postList.length == 0){
    return(
      <Flex alignItems='center' justifyContent='center'>
        <Spinner/>
      </Flex>
    )
  }
  
  return(
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
              <FaRegTrashAlt 
              color='#f30c0c' 
              size={20} 
              style={{cursor:'pointer'}}
              onClick={() => handleDeleteClick(post)}/>    
            </Flex>
          </Flex>
        )}
      </Box>           
    </Flex>
  )
}