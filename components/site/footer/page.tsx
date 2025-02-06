import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";

export default function Footer(){
  return(
    <>
    <Box backgroundColor='#f2f2f2'>
      <Box className="container" py='30px'>
        <Box mb='30px'>
          <Image src='https://www.jota.info/images/meta/jotalogo.svg'/>
        </Box>
        <Grid templateColumns={{base:"repeat(2, 1fr)", md:"repeat(4, 1fr)"}} gap="6">
          <Box display='flex' flexDirection='column'>
            <Text fontWeight={500} mb='10px'> Poder PRO </Text>
            <Text mb='10px'>Apostas da Semana</Text>
            <Text mb='10px'>Impacto nas Instituições</Text>
            <Text mb='10px'>Risco Político</Text>
            <Text mb='10px'>Alertas</Text>
          </Box>
          <Box display='flex' flexDirection='column'>
            <Text fontWeight={500} mb='10px'> Tributos PRO </Text>
            <Text mb='10px'>Apostas da Semana</Text>
            <Text mb='10px'>Direto do CARF</Text>
            <Text mb='10px'>Direto da Corte</Text>
            <Text mb='10px'>Direto do Legislativo</Text>
            <Text mb='10px'>Matinal</Text>
            <Text mb='10px'>Relatórios Especiais</Text>
          </Box>
          <Box display='flex' flexDirection='column'>
            <Text fontWeight={500} mb='10px'> Editorias </Text>
            <Text mb='10px'>Executivo</Text>
            <Text mb='10px'>Legislativo</Text>
            <Text mb='10px'>STF</Text>
            <Text mb='10px'>Justiça</Text>
            <Text mb='10px'>Saúde</Text>
            <Text mb='10px'>Opinião e Análise</Text>
            <Text mb='10px'>Coberturas Especiais</Text>
            <Text mb='10px'>Eleições 2024</Text>
          </Box>
          <Box display='flex' flexDirection='column'>
            <Text fontWeight={500} mb='10px'> Sobre o JOTA </Text>
            <Text mb='10px'>Estúdio JOTA</Text>
            <Text mb='10px'>Ética JOTA</Text>
            <Text mb='10px'>Política de Privacidade</Text>
            <Text mb='10px'>Seus Dados</Text>
            <Text mb='10px'>Termos de Uso</Text>
          </Box>
        </Grid>
      </Box>
    </Box>
    <Box className='bgPrimary'>
      <Text
        color='#FFFFFF'
        textAlign='center'
        py='5px'
        fontSize='12px'
      >By Amanda Furuta, 2025</Text>
    </Box>
    </>
  )
}