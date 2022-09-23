import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const MiniNav = () => {
  return (
    <Flex
      flexDir='column'
      alignItems='center'
      position='fixed'
      top='90px'
      left='0'
      w='100vw'
      h='100vh'
      gap='3rem'
      backgroundColor='brand.900'
      fontSize='1.7rem'
      overflowX='hidden'
      transition='ease-in-out 0.5s'
      pt='6rem'
    >
      <Text>Home</Text>
      <Text>Shop</Text>
      <Text>Login</Text>
      <Text>Cart</Text>
    </Flex>
  );
};

export default MiniNav;
