import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  params: { id: string }; 
}

export default function PostId({ params: { id } }: Props) {
  console.log(id); 

  return (
    <Flex minH='100vh' >
      <Text>Post ID: {id}</Text> 
    </Flex>
  );
}