import React, { useState } from "react";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";

const Item = ({ item }) => {
  const { title, price } = item;
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <Box>
      <Button
        opacity={hover ? "1" : "0"}
        backgroundColor='red'
        alignItems='center'
        alignContent='center'
        alignSelf='center'
      >
        View
      </Button>
      <Flex
        onMouseOver={mouseEnter}
        onMouseOut={mouseOut}
        backgroundColor='white'
        borderRadius='10px'
        flexDir='column'
        h='95%'
        w='95%'
        textAlign='right'
        justifyContent='space-between'
        p='5'
        m='5'
      >
        <Box d='flex' margin='auto'>
          <Image
            objectFit='contain'
            p='2'
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
    </Box>
  );
};

export default Item;
