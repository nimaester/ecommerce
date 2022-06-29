import Head from "next/head";
import { background, Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerce App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW='6xl' color='brand.700'>
        <Text fontSize='5xl'>Main Page</Text>
      </Container>
    </div>
  );
}
