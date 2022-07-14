import React, { useState } from "react";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ButtonDefault } from "../elements/Buttons";

const Items = ({ item }) => {
  const { title, price, slug } = item;
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <Box>
      <Link href={`item/${slug}`}>
        <Flex
          position='relative'
          onMouseOver={mouseEnter}
          onMouseOut={mouseOut}
          backgroundColor='white'
          borderRadius='10px'
          flexDir='column'
          h='95%'
          w='95%'
          textAlign='right'
          justifyContent='space-between'
          p='4'
          m='4'
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
          <Box
            opacity={hover ? "1" : "0"}
            position='absolute'
            top='50%'
            left='50%'
            style={{
              msTransform: "translate(-50%, -50%)",
              transform: "translate(-50%, -50%)",
            }}
            _hover={{
              cursor: "pointer",
              boxShadow: "0 0 11px rgba(33,33,33,.9)",
            }}
            h='100%'
            w='100%'
            borderRadius='10px'
          >
            <ButtonDefault
              position='absolute'
              top='50%'
              left='50%'
              style={{
                msTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
              }}
            >
              View
            </ButtonDefault>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export default Items;
