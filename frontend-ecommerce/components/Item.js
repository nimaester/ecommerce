import React from "react";
import { Flex, Text, Image, Box, Container } from "@chakra-ui/react";

const Item = ({ item }) => {
  const { title, price } = item;

  return (
    <Flex
      backgroundColor='white'
      borderRadius='10px'
      flexDir='column'
      m='1'
      p='4'
      textAlign='right'
      justifyContent='space-between'
    >
      <Box d='flex' margin='auto'>
        <Image
          objectFit='contain'
          p='2'
          cursor='pointer'
          src={item.image.data.attributes.formats.thumbnail.url}
          alt={item.title}
        />
      </Box>

      <Box pt='4' mt='6' cursor='pointer'>
        <Text fontWeight='bold'>{title}</Text>
        <Text>$ {price}</Text>
      </Box>
    </Flex>
  );
};

export default Item;
