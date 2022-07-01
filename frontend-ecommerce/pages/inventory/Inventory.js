import React from "react";
import { Flex, Text, Image, Box, Container } from "@chakra-ui/react";

const Inventory = ({ item }) => {
  const { title, description, price } = item;

  return (
    <Container maxW='6xl' margin='auto'>
      <Flex margin='9' align='center' maxW='xl' justify='space-between'>
        <Box>
          <Text fontSize='3xl'>{title}</Text>
          <Text>{description}</Text>
          <Text>{price}</Text>
        </Box>

        <Image
          w='20'
          src={item.image.data.attributes.formats.thumbnail.url}
          alt={item.title}
        />
      </Flex>
    </Container>
  );
};

export default Inventory;
