import React from "react";
import { Flex, Text, Image, Box, Container } from "@chakra-ui/react";

const Inventory = ({ item }) => {
  const { title, price } = item;

  return (
    <Flex
      flexDir='column'
      justifyContent='space-between'
      m='2'
      p='2'
      border='1px solid black'
      maxW='xl'
    >
      <Image
        cursor='pointer'
        w='40'
        src={item.image.data.attributes.formats.thumbnail.url}
        alt={item.title}
      />
      <Box mt='5' cursor='pointer'>
        <Text fontWeight='bold'>{title}</Text>
        <Text>{price}</Text>
      </Box>
    </Flex>
  );
};

export default Inventory;
