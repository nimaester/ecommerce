import React, { useState } from "react";
import { Container, Text, Box, Image, Button, Flex } from "@chakra-ui/react";
import { useQuery } from "urql";
import { GET_ITEM_INFO } from "../../lib/query";
import { useRouter } from "next/router";
import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { ButtonDefault } from "../../elements/Buttons";
import { ItemNameText } from "../../elements/Text";

const ItemDetail = () => {
  const [zoom, setZoom] = useState(false);
  const { query } = useRouter();
  const router = useRouter();

  // fectch item data from graphql api
  const [result] = useQuery({
    query: GET_ITEM_INFO,
    variables: { slug: query.item },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const itemData = data.inventories.data[0].attributes;
  const { title, available, description, price, slug } = itemData;

  const closeZoom = () => {
    setZoom(false);
  };

  const openZoom = () => {
    setZoom(true);
  };

  const showZoomedImage = () => {
    return (
      <Box
        position='absolute'
        zIndex='20'
        top='0'
        left='0'
        backgroundColor='white'
      >
        <Box
          p='5'
          minW='100vw'
          minH='100vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image
            m='auto'
            src={itemData.image.data.attributes.formats.medium.url}
            alt={slug}
            h='auto'
            w='auto'
            maxH='85vh'
          />
        </Box>
        <Button
          backgroundColor='transparent'
          onClick={closeZoom}
          position='absolute'
          right='0'
          top='0'
        >
          <IoIosCloseCircle size='30' />
        </Button>
      </Box>
    );
  };

  return (
    <Box>
      <Container
        maxW='container.xl'
        display={{
          sm: "block",
          md: "flex",
          lg: "flex",
          xl: "flex",
          base: "block",
        }}
        p={{
          sm: "2rem",
          md: "3rem 5rem",
          lg: "3rem 5rem",
          xl: "3rem 5rem",
          base: "2rem",
        }}
      >
        {zoom ? (
          showZoomedImage()
        ) : (
          <>
            <Box
              flex='1.4'
              display='flex'
              alignItems='center'
              justifyContent='center'
              h={{
                sm: "80vh",
                base: "80vh",
              }}
            >
              <Image
                _hover={{ cursor: "zoom-in" }}
                src={itemData.image.data.attributes.formats.medium.url}
                alt={slug}
                onClick={openZoom}
                w='100%'
                maxW='450px'
              />
            </Box>
            <Flex
              pl={{
                sm: "0rem",
                md: "2rem",
                lg: "2rem",
                xl: "2rem",
                base: "0rem",
              }}
              flex='1'
              flexDir='column'
              justifyContent='center'
            >
              <Box>
                <ItemNameText pt='4' pb='4'>
                  {title}
                </ItemNameText>
                <Text pt='4' pb='4'>
                  {description}
                </Text>
              </Box>
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                p='2rem 0rem'
              >
                <ButtonDefault
                  disabled={!available ? true : false}
                  onClick={() => router.back()}
                >
                  {available ? "Add to cart" : "Sold Out"}
                </ButtonDefault>
                <Text fontSize='xl'>${price}</Text>
              </Box>
            </Flex>
          </>
        )}
      </Container>
      <Box pb='10' display='flex' justifyContent='center'>
        <Button
          backgroundColor='transparent'
          p='8'
          w='90%'
          cursor='pointer'
          onClick={() => router.push("/")}
          _hover={{ outline: "none", color: "button.primary" }}
          _active={{ outline: "none", transform: "scale(1.05)" }}
        >
          <MdKeyboardBackspace size='30' /> Back to previous page
        </Button>
      </Box>
    </Box>
  );
};

export default ItemDetail;
