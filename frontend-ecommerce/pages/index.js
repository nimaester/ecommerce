import Head from "next/head";
import { useQuery, Query } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

import { Container, Text, Flex, Grid, Box } from "@chakra-ui/react";
import Item from "./inventory/Item";

export default function Home() {
  //Fetch products from strapi

  const [result, reexecuteQuery] = useQuery({
    query: PRODUCT_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const inventories = data.inventories.data;

  return (
    <div>
      <Head>
        <title>Ecommerce App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Container
        maxW='container.xl'
        d='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text pb='10' fontSize='5rem' textAlign='center'>
          Main Page
        </Text>
        <Grid
          gridTemplateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
            base: "repeat(3, 1fr)",
          }}
          wrap='wrap'
          flexDir='row'
          margin='auto'
        >
          {inventories.map((item) => (
            <Item key={item.attributes.slug} item={item.attributes} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
