import { Container, Text, Box, Image, Button } from "@chakra-ui/react";
import { useQuery } from "urql";
import React from "react";

const ItemDetail = () => {
  return (
    <Container maxW='contaier.xl'>
      <Box>
        <Image src='' alt='' />
      </Box>
      <Box>
        <Text>Title</Text>
        <Text>Description</Text>
      </Box>
      <Box>
        <Text>Quantity</Text>
        <Button>+</Button>
        <Button>-</Button>
      </Box>
      <Button>Add to cart</Button>
    </Container>
  );
};

export default ItemDetail;
