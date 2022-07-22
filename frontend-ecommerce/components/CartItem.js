import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useGlobalContext } from "../lib/storeContext";

const CartItem = ({ cartItem }) => {
  const { cart, setCart } = useGlobalContext();

  const removeItem = (item) => {
    const newCartItems = cart.filter((cartItem) => {
      return cartItem.slug === item ? false : true;
    });
    setCart(newCartItems);
  };

  return (
    <Box p='0rem 2rem'>
      <Flex
        p='2rem 0rem'
        justifyContent='space-between'
        alignItems='center'
        h='100px'
        position='relative'
        w='100%'
      >
        <Image maxW='80px' src={cartItem.image} alt={cartItem.slug} />
        <Text>{cartItem.name}</Text>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Text>$ {cartItem.price}</Text>
          <Text
            color='red'
            _hover={{ cursor: "pointer" }}
            onClick={() => removeItem(cartItem.slug)}
          >
            Remove
          </Text>
        </Box>
      </Flex>
      <hr />
    </Box>
  );
};

export default CartItem;
