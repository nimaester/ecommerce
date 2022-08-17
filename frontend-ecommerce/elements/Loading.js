import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      w='100vw'
      h='100vh'
      justifyContent='center'
      alignItems='center'
      position='absolute'
      top='0'
      background='brand.200'
      zIndex='100'
    >
      <Spinner
        thickness='5px'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex>
  );
};
