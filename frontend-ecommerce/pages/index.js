import Head from "next/head";
import { useQuery, Query } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

import { Container, Text, Flex, Grid } from "@chakra-ui/react";
import Inventory from "./inventory/Inventory";

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
      <main>
        <Text color='brand.700' fontSize='5xl'>
          Main Page
        </Text>
      </main>
      <Flex wrap='wrap' flexDir='row' maxW='container.lg' margin='auto'>
        {inventories.map((item) => (
          <Inventory key={item.attributes.slug} item={item.attributes} />
        ))}
      </Flex>
    </div>
  );
}
