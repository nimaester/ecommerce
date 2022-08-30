import React from "react";
import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import { Grid, Box } from "@chakra-ui/react";
import Item from "../components/Item";
import SortItem from "../components/SortItem";
import { useGlobalContext } from "../lib/storeContext";
import { DefaultContainer } from "../elements/Container";
import { HeaderText } from "../elements/Text";
import { Loading } from "../elements/Loading";
import { FailedToFetch } from "../elements/FailedToFetch";
import { motion } from "framer-motion";

export default function Home() {
  const { sort, cartSlider, setCartSlider } = useGlobalContext();

  //Fetch products from strapi
  const [result] = useQuery({
    query: PRODUCT_QUERY,
  });

  const closeCartSlider = () => {
    setCartSlider(false);
  };

  const { data, fetching, error } = result;
  if (fetching) return <Loading />;
  if (error) return <FailedToFetch />;
  const inventories = data.inventories.data;

  const displaySort = () => {
    if (sort === "philo") {
      return (
        <>
          {inventories
            .sort((a, b) => b.attributes.price - a.attributes.price)
            .map((item) => (
              <Item key={item.attributes.slug} item={item.attributes} />
            ))}
        </>
      );
    } else if (sort === "plohi") {
      return (
        <>
          {inventories
            .sort((a, b) => a.attributes.price - b.attributes.price)
            .map((item) => (
              <Item key={item.attributes.slug} item={item.attributes} />
            ))}
        </>
      );
    } else {
      return (
        <>
          {inventories.map((item) => (
            <Item key={item.attributes.slug} item={item.attributes} />
          ))}
        </>
      );
    }
  };

  return (
    <Box
      backgroundColor='brand.100'
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <Head>
        <title>Ecommerce App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content="Marcia's Boutique" />
      </Head>
      <DefaultContainer>
        <HeaderText>Current Inventory</HeaderText>
        <SortItem />
        <Grid
          gridTemplateColumns={{
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
            base: "repeat(2, 1fr)",
          }}
          gap='1rem'
        >
          {displaySort()}
        </Grid>
      </DefaultContainer>
    </Box>
  );
}
