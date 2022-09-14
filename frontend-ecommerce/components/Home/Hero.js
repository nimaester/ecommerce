import React from "react";
import { Flex, Box, Text, Image, Container } from "@chakra-ui/react";
import { DefaultContainer } from "../../elements/Container";

const Hero = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      bg='url(https://mbpics7528.s3.us-west-1.amazonaws.com/wallpaper.jpg) center no-repeat'
      h='100vh'
      backgroundSize='cover'
      flexDir='column'
    >
      <Text
        fontSize={{
          sm: "2.5rem",
          md: "3.5rem",
          base: "2rem",
        }}
        fontWeight='500'
        color='white'
        textShadow='2px 2px 2px black'
        textAlign='center'
      >
        Marcia's Boutique
      </Text>
      <Text
        fontSize={{
          sm: "1.2rem",
          md: "1.4rem",
          base: "1rem",
        }}
        fontWeight='500'
        color='white'
        textShadow='2px 2px 2px black'
        textAlign='center'
      >
        A collection of used/new products at great prices!
      </Text>
    </Flex>
  );
};

export default Hero;
