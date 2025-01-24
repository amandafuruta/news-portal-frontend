import { Box, Image, Text } from "@chakra-ui/react"

interface Props{
  category: string
  title: string
  subtitle?: string
  image: string
  alt: string
  section?: number
  order?: number
}

export default function NewsCard(props:Props){
  const { category, title, subtitle, image, alt, section, order } = props

  return(
    <Box display='flex' flexDirection='column' mb='20px'>
      <Box 
      maxW={section == 1 && order == 1 ? '450px' : '200px'} 
      w='100%'
      mb='10px'>
        <Image src={`./${image}`} alt={alt} w='100%'/>
      </Box>
      <Text 
      className={category == 'Saúde'? "primary" : category == 'Poder'? 'power': 'economy' }
      textTransform='uppercase' 
      fontWeight={500}>
        {category}
      </Text>
      <Box
      maxW={section == 1 && order == 1 ? '450px' : '200px'} 
      w='100%'
      display='flex'
      flexDirection='column'>
        <Text 
        fontSize={section == 1 && order == 1 ? '30px' : '19px'}
        w='100%'
        mb='10px'
        lineHeight={1.2}>
          {title}
        </Text>
        {
          subtitle &&
          <Text w='100%' color='#666'>
            {subtitle}
          </Text>
        }
      </Box>
    </Box>
  )
}