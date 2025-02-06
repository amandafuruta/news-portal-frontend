'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

export default function PostId() {
  const searchParams = useSearchParams()
      , itemId = searchParams.get('post')  

  return (
    <Flex minH='100vh' >
      <Text>Post ID: {itemId}</Text> 
    </Flex>
  );
}