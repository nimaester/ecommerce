import React from "react";
import { Flex, Text, Image, Box, Container } from "@chakra-ui/react";

const Inventory = ({ item }) => {
  const { title, description, price } = item;

  return (
    <Container maxW='6xl'>
      <Box margin='9' maxW='xl'>
        <Image
          cursor='pointer'
          w='40'
          src={item.image.data.attributes.formats.thumbnail.url}
          alt={item.title}
        />
        <Box cursor='pointer'>
          <Text fontWeight='bold'>{title}</Text>
          <Text>{price}</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Inventory;
