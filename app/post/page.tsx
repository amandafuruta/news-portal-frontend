'use client'
import Footer from "@/components/site/footer/page";
import Header from "@/components/site/header";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Post{
  id: number
  category: string
  auth: string
  title: string 
  subtitle: string 
  image: string
  alt: string
  body: string
  datePublished: string
}

export default function PostId() {
  const searchParams = useSearchParams()
      , itemId = searchParams.get('post')  
      , [post, setPost] = useState<Post | null >(null)
  
  useEffect(()=> {
    const fetchPost = async () => {
      try{
        const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/${itemId}/`)

        if (res.ok){
          const postData = await res.json();
          setPost(postData)          
        }
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }

    fetchPost()
  }, [])

  return (
    <>
    <Header />
    <Flex minH='100vh' my='200px'>
      <Flex className='container'
      maxW='720px'
      alignItems='center'
      flexDirection='column'>
        <Text 
        fontSize='30px'
        w='100%'
        textAlign='center'
        fontWeight={600}
        mb='20px'
        lineHeight={1.3}>
          {post?.title}
        </Text> 
        <Text 
        fontSize='20px'
        w='100%'
        textAlign='center'
        fontWeight={600}
        color='#3d3c3c'
        lineHeight={1.3}
        mb='40px'>
          {post?.subtitle}
        </Text> 
        <Box mb='40px'>
          <Text lineHeight={1.3} >
            {post?.auth}
          </Text>
          <Text fontSize={'12px'}>
            {post?.datePublished}
          </Text>
          <Box w='100%'>
            <Image src={post?.image} w='100%'/>
          </Box>
          <Box backgroundColor='#dddddd' padding='5px 10px'>
            <Text fontSize={'12px'}>
              {post?.alt}
            </Text>
          </Box>
        </Box>
        <Text>
          {post?.body}
        </Text>
      </Flex>
    </Flex>
    <Footer />
    </>
  );
}