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
      <Flex p='2rem 0rem' justifyContent='space-between' alignItems='center'>
        <Image
          w='10%'
          objectFit='fill'
          src={cartItem.image}
          alt={cartItem.slug}
        />
        <Text>{cartItem.name}</Text>
        <Box display='flex' flexDir='column' alignItems='center'>
          <Text>$ {cartItem.price}</Text>
          <Text
            color='red'
            _hover={{ cursor: "pointer" }}
            onClick={() => removeItem(cartItem.slug)}
          >
            remove
          </Text>
        </Box>
      </Flex>
      <hr />
    </Box>
  );
};

export default CartItem;
