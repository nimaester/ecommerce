import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useGlobalContext } from "../lib/storeContext";
import Link from "next/link";

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
        <Link href={`item/${cartItem.slug}`}>
          <Flex flex='1.8' justifyContent='space-between' alignItems='center'>
            <Image
              _hover={{ cursor: "pointer" }}
              maxW='80px'
              src={cartItem.image}
              alt={cartItem.slug}
            />
            <Text _hover={{ cursor: "pointer" }}>{cartItem.name}</Text>
          </Flex>
        </Link>
        <Flex
          flex='1.2 '
          flexDir='column'
          alignItems='end'
          justifyContent='right'
        >
          <Text>$ {cartItem.price}</Text>
          <Text
            color='red'
            _hover={{ cursor: "pointer" }}
            onClick={() => removeItem(cartItem.slug)}
          >
            Remove
          </Text>
        </Flex>
      </Flex>

      <hr />
    </Box>
  );
};

export default CartItem;
