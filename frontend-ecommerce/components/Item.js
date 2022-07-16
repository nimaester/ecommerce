import React, { useState } from "react";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ButtonDefault } from "../elements/Buttons";
import { FixedBox } from "../elements/Boxes";

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
          h='100%'
          w='100%'
          textAlign='right'
          justifyContent='space-between'
          p='4'
        >
          <Box d='flex' margin='auto'>
            <Image
              p='1'
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
          <FixedBox opacity={hover ? "1" : "0"}>
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
          </FixedBox>
        </Flex>
      </Link>
    </Box>
  );
};

export default Items;
