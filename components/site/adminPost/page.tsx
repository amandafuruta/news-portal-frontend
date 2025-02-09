'use client'
import { Box, Button, createListCollection, Flex, Image, Input, SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText, Spinner, Text } from "@chakra-ui/react";
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

const options = createListCollection({
  items: [
    { label: "Mais Recente", value: "latest" },
    { label: "Mais Antigo", value: "oldest" }
  ],
})

export default function AdminPost(){
  const [postList, setPostList] = useState<Post[]>([])
      , [filteredPosts, setFilteredPosts] = useState<Post[]>([])
      , [selectedPost, setSelectedPost] = useState(0)
      , [name, setName] = useState("")

  const getPostList = async () => {
    try {
      const res = await fetch(`${process.env.PUBLIC_API_URL}/posts/`)
          , resData = await res.json()
          
        setPostList(resData);         
        setFilteredPosts(resData);         
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []); 

  const handleSortChange = (value: string) => {
    const parseDate = (dateString: string) => {
      const [datePart, timePart] = dateString.split(' ');
      const [day, month, year] = datePart.split('-');
      const [hours, minutes] = timePart.split(':');
      
      return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
    };
  
    if (value === "latest") {
      const sortedPosts = [...postList].sort((a, b) => parseDate(b.datePublished).getTime() - parseDate(a.datePublished).getTime())
      setFilteredPosts(sortedPosts)
    } else if (value === "oldest") {
      const sortedPosts = [...postList].sort((a, b) => parseDate(a.datePublished).getTime() - parseDate(b.datePublished).getTime())
      setFilteredPosts(sortedPosts)
    }
  };

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

  const debouncedFilter = (searchTerm: string) => {
    if (searchTerm) {
      const results = postList.filter((item: Post) =>
        item.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
      setFilteredPosts(results)
    } else {
      setFilteredPosts(postList)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value
    setName(searchName)
    debouncedFilter(searchName)
  }

  if(postList.length == 0){
    return(
      <Flex alignItems='center' justifyContent='center' minH='100vh'>
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
      <Flex w='100%' pt='20px' flexDirection='column' alignItems='center'> 
        <Flex 
          maxW='1000px' 
          w='100%' 
          mb='40px'
          mt='20px'
          px='10px'
          alignItems={{base:'baseline', md:'center'}}
          justifyContent='space-evenly'
          flexDirection={{base:'column-reverse', md:'row'}}>
            <Box 
            position='relative'
            maxW='400px'
            w='100%'
            _after={{
              content: '""',
              position: 'absolute',
              w: '100%',
              h: '1px',
              bottom: '1px',
              left: 0,
              bg: '#1C9AB8',
            }}>
              <Input 
                type='text'
                placeholder="Pesquisar por título"                             
                w='100%'
                border="none"
                value={name}
                onChange={handleSearchChange}              
                _focus={{ 
                  border: "none",
                  outline: "none"
                }}              
              />   
            </Box>
            <SelectRoot 
            maxW='300px' 
            w='100%' 
            collection={options} 
            flexDir='row' 
            alignItems='center'
            mb={{base:'20px', md:'0px'}}
            onValueChange={(details) => {
              handleSortChange(details.value[0])
            }}>
              <SelectLabel w='150px'>Ordenar por:</SelectLabel>
              <Flex flexDirection='column' position='relative'>
                <SelectTrigger w='195px'>
                  <SelectValueText placeholder="data de publicação" />
                </SelectTrigger>
                <SelectContent 
                position='absolute'
                bottom='-73px'
                w='195px'>
                  {options.items.map((opt) => (
                    <SelectItem item={opt} key={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Flex>
            </SelectRoot>
        </Flex>     
        <Box maxW='1000px' w='100%' padding='10px'>
          {filteredPosts.map((post, index)=> 
            <Flex key={index} 
            mb={{base:'55px', md:'20px' }}
            alignItems='center' 
            flexDirection={{base:'column', md:'row'}}>
              <Box 
              maxW='100px' 
              w='100%'
              h='80px' 
              borderRadius='5px' 
              overflow='hidden'
              mr={{base:'0px', md:'20px'}}>
                <Image src={post.image} alt={post.alt}  w='100%' h='100%' />
              </Box>
              <Flex 
              flexDirection='column' 
              maxW='700px'
              w='100%'
              mr={{base:'0px', md:'40px'}}>
                <Text 
                fontWeight={500} 
                color='#646363'
                fontSize='18px'
                mb='5px'
                textAlign={{base:'center', md:'left'}}>
                  {post.title}
                </Text>
                <Text
                fontWeight={500} 
                color='#c4bebe'
                fontSize='15px'
                textAlign={{base:'center', md:'left'}}>
                  {post.datePublished}
                </Text>
              </Flex>
              <Flex>
                <Link 
                href={{ pathname: "/authenticated/admin/add-edit-post/", query: { post: post.id } }}
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