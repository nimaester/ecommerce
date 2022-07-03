import React from "react";
import { Flex, Text, Image, Box, Container } from "@chakra-ui/react";

const Item = ({ item }) => {
  const { title, price } = item;

  return (
    <Flex
      flexDir='column'
      justifyContent='space-between'
      m='1'
      p='4'
      border='1px solid black'
      alignItems='center'
    >
      <Image
        objectFit='contain'
        p='2'
        cursor='pointer'
        h='90%'
        w='90%'
        src={item.image.data.attributes.formats.thumbnail.url}
        alt={item.title}
      />

      <Box pt='4' mt='6' cursor='pointer'>
        <Text fontWeight='bold'>{title}</Text>
        <Text>$ {price}</Text>
      </Box>
    </Flex>
  );
};

export default Item;
