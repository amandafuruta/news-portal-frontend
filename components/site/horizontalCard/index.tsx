import {Box, Image, Text} from '@chakra-ui/react';

interface Props{
  category?: string
  title: string
  titleFontSize?: string
  image: string
  alt: string
}

export default function HorizontalCard(props:Props) {
  const { category, title, titleFontSize, image, alt } = props
  return(
    <Box  
    display='flex' 
    alignItems='center'
    py='20px' 
    borderBottom={'1px solid #f2f2f2'}
    h='138px'>
      <Box maxW='110px' w='100%' mr='20px'>
        <Image src={`./${image}`} alt={alt} w='100%'/>
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
        lineHeight={1.2}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxHeight: 'calc(1.5em * 4)',
        }}>
          {title}
        </Text>
      </Box>
    </Box>
  )
}