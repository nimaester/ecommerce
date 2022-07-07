import React, { useState } from "react";
import { Flex, Text, Image, Box, PseudoBox } from "@chakra-ui/react";

const Item = ({ item }) => {
  const { title, price } = item;
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
    console.log("enter");
  };

  const mouseOut = () => {
    setHover(false);
    console.log("out");
  };

  return (
    <Flex
      onMouseOver={mouseEnter}
      onMouseOut={mouseOut}
      backgroundColor='white'
      borderRadius='10px'
      flexDir='column'
      m='1'
      p='4'
      textAlign='right'
      justifyContent='space-between'
      // _hover={{ backgroundColor: "red" }}
    >
      <Box
        display={hover ? "block" : "none"}
        zIndex='50'
        backgroundColor='red'
        position='sticky'
        top='0'
        h='100%'
        w='100%'
      ></Box>

      <Box d='flex' margin='auto'>
        <Image
          objectFit='contain'
          p='2'
          cursor='pointer'
          src={item.image.data.attributes.formats.thumbnail.url}
          alt={item.title}
        />
      </Box>

      <Box
        pt='4'
        mt='6'
        cursor='pointer'
        fontSize={{
          sm: "0.8rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
          base: "0.8rem",
        }}
      >
        <Text fontWeight='bold'>{title}</Text>
        <Text>$ {price}</Text>
      </Box>
    </Flex>
  );
};

export default Item;
