import { Button, 
  Card, 
  CardBody, 
  CardFooter, 
  Heading, 
  Stack,
  Image,
  Text, 
  Link
} from "@chakra-ui/react";
import styles from "./page.module.css";

async function getNews() {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia')
    if (!response.ok) {
      throw new Error('networking bad')
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('failed fetch', error)
    return { noticias: [] }
  }
}




export default async function Home() {
  const news = await getNews()
  const noticias = news.items
  return (
    <main>
        <Heading ml={'45%'} mt={50} size={'4xl'}>Top Noticias</Heading>
      <div>
        {noticias && noticias.map((item: any) => (
          <Card 
          direction={{base: 'column', sm: 'row'}}
          variant={'outline'}
          maxW={800}
          m={'auto'}
          py={25}
          >
            <CardBody>
              <Heading>{item.titulo}</Heading>
              <Text as={'b'}>{item.tipo}</Text>
              <Text>{item.introducao}</Text>
              <Link color={'blue'} href={item.link}>Ler Mais...</Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </main >
  );
}
