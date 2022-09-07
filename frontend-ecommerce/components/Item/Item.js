import React, { useState } from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import Link from "next/link";
import { ButtonDefault } from "../../elements/Buttons";
import { FixedBox } from "../../elements/Boxes";

const Items = ({ item }) => {
  const { title, price, slug } = item;
  const [hover, setHover] = useState(false);

  return (
    <Box w='100%'>
      <Link href={`item/${slug}`}>
        <Flex
          position='relative'
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          backgroundColor='white'
          borderRadius='10px'
          flexDirection='column'
          h='100%'
          textAlign='right'
          p='4'
        >
          <Box margin='auto'>
            <Image
              p='1'
              src={item.image.data.attributes.formats.thumbnail.url}
              alt={item.title}
            />
          </Box>

          <Box pt='4' mt='6'>
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
