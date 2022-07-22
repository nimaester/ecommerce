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
      <Flex p='2rem 0rem' justifyContent='space-between' h='100px'>
        <Link href={`item/${cartItem.slug}`}>
          <Box
            display={{
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              base: "none",
            }}
            alignItems='center'
          >
            <Image
              _hover={{ cursor: "pointer" }}
              maxW='70px'
              src={cartItem.image}
              alt={cartItem.slug}
            />
          </Box>
        </Link>
        <Link href={`item/${cartItem.slug}`}>
          <Flex alignItems='center'>
            <Text _hover={{ cursor: "pointer" }}>{cartItem.name}</Text>
          </Flex>
        </Link>
        <Flex flexDir='column' alignItems='end'>
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
