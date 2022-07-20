import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const CartItem = ({ cartItem }) => {
  return (
    <Box p='0rem 2rem'>
      <Flex p='2rem 0rem' justifyContent='space-between' alignItems='center'>
        <Image
          w='10%'
          objectFit='fill'
          src={cartItem.image}
          alt={cartItem.slug}
        />
        <Text>{cartItem.name}</Text>
        <Text>$ {cartItem.price}</Text>
      </Flex>
      <hr />
    </Box>
  );
};

export default CartItem;
