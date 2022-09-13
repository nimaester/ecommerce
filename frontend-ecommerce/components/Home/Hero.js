import React from "react";
import { Flex, Box, Text, Image, Container } from "@chakra-ui/react";
import { DefaultContainer } from "../../elements/Container";

const Hero = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      bg='url(https://mbpics7528.s3.us-west-1.amazonaws.com/wallpaper.jpg) center no-repeat'
      h='90vh'
      backgroundSize='cover'
      flexDir='column'
    >
      <Text
        fontSize='3.5rem'
        fontWeight='500'
        color='white'
        textShadow='2px 2px 2px black'
        textAlign='center'
      >
        Marcia's Boutique
      </Text>
      <Text
        fontSize='1.5rem'
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
