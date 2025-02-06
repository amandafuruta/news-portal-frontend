import {Box, Image, Text} from '@chakra-ui/react';
import Link from 'next/link';

interface Props{
  id: number
  category?: string
  title: string
  titleFontSize?: string
  image: string
  alt: string
}

export default function HorizontalCard(props:Props) {
  const { id , category, title, titleFontSize, image, alt } = props

  return(
    <Link href={{pathname: '/post', query:{ post: id }}}>    
      <Box  
      display='flex' 
      flexDirection={{base:'column', lg:'row'}}
      alignItems='center'
      py='20px' 
      borderBottom={'1px solid #f2f2f2'}
      h={{base:'auto', lg:'138px'}}>
        <Box 
        maxW='110px' 
        w='100%' 
        mr={{base:'0', lg:'20px'}} 
        mb={{base:'15px', lg:'0'}}
        h={{base: '82px', lg:'auto'}}>
          <Image src={image} alt={alt} w='100%'/>
        </Box>
        <Box display='flex' flexDirection='column'>
          <Text 
          className={category == 'Saúde'? "primary" : category == 'Poder'? 'power': 'economy' }
          fontWeight={700}
          fontSize='10px'
          textTransform='uppercase'
          display={category? 'flex': 'none'}>
            {category}
          </Text>
          <Text
          fontSize={titleFontSize? titleFontSize :'14px'}        
          mb='10px'
          maxW={{base:'310px'}}
          w='100%'
          lineHeight={1.2}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: 'calc(1.5em * 3)',
          }}>
            {title}
          </Text>
        </Box>
      </Box>
    </Link>
  )
}