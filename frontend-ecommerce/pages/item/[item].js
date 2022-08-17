import React, { useState } from "react";
import {
  Container,
  Text,
  Box,
  Image,
  Button,
  Flex,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useQuery } from "urql";
import { GET_ITEM_INFO } from "../../lib/query";
import { useRouter } from "next/router";
import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { ButtonDefault, DisabledButton } from "../../elements/Buttons";
import { ItemNameText } from "../../elements/Text";
import { DefaultContainer } from "../../elements/Container";
import { useGlobalContext } from "../../lib/storeContext";

const ItemDetail = () => {
  const toast = useToast();
  const id = "test-toast";
  const { cart, setCart, cartSlider } = useGlobalContext();
  const [numOfItem, setNumOfItem] = useState(1);

  const [zoom, setZoom] = useState(false);
  const { query } = useRouter();
  const router = useRouter();

  // fetch item data from graphql api
  const [result] = useQuery({
    query: GET_ITEM_INFO,
    variables: { slug: query.item },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const itemData = data.inventories.data[0].attributes;
  const { title, description, price, slug, count } = itemData;

  const closeZoom = () => {
    setZoom(false);
  };

  const openZoom = () => {
    setZoom(true);
  };

  const itemInCart = () => {
    return {
      name: title,
      description: description,
      price: price,
      slug: slug,
      image: itemData.image.data.attributes.formats.thumbnail.url,
      count: Number(numOfItem),
      limit: count,
    };
  };

  const showNumberOfItems = (limit) => {
    let counts = [];
    let count = 1;

    while (count <= limit) {
      counts.push(count);
      count += 1;
    }

    return counts.map((num) => (
      <option key={num} value={num}>
        {num}
      </option>
    ));
  };

  const addToCart = (slugName) => {
    const inCart = cart.find((item) => item.slug === slugName);
    if (!inCart) {
      setCart([...cart, itemInCart()]);
    }
    if (!toast.isActive(id)) {
      toast({
        id,
        title: inCart ? "Item is already in the cart" : "Item added to cart",
        status: inCart ? "error" : "success",
        duration: 1000,
      });
    }
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
            src={itemData.image.data.attributes.formats.medium.url}
            alt={slug}
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
    <DefaultContainer mt='3rem'>
      {zoom ? (
        showZoomedImage()
      ) : (
        <Box
          display={{
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
            base: "block",
          }}
        >
          <Box
            flex='1.4'
            display='flex'
            justifyContent='center'
            alignItems='center'
            pb={{
              sm: "4rem",
              md: "flex",
              lg: "flex",
              xl: "flex",
              base: "4rem",
            }}
          >
            <Image
              _hover={{ cursor: "zoom-in" }}
              src={itemData.image.data.attributes.formats.medium.url}
              alt={slug}
              onClick={openZoom}
              w={{
                sm: "80%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                base: "80%",
              }}
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
              <ItemNameText>{title}</ItemNameText>
              <Text fontSize='2xl'>${price}</Text>
              <Text pt='4' pb='4'>
                {description}
              </Text>
            </Box>

            <Box
              display='flex'
              gap='2rem'
              justifyContent={{
                sm: "left",
                base: "space-between",
              }}
              alignItems='center'
              p='2rem 0rem'
            >
              {count > 0 ? (
                <Select
                  onChange={(e) => setNumOfItem(e.target.value)}
                  maxW='80px'
                  p='0rem'
                >
                  {showNumberOfItems(count)}
                </Select>
              ) : null}
              <Box>
                {count > 0 ? (
                  <ButtonDefault onClick={() => addToCart(slug)}>
                    Add to cart
                  </ButtonDefault>
                ) : (
                  <DisabledButton />
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
      <Button
        backgroundColor='transparent'
        p='5rem 0rem'
        w='100%'
        cursor='pointer'
        onClick={() => router.back()}
        _hover={{ outline: "none", color: "button.primary" }}
        _active={{ outline: "none", transform: "scale(1.05)" }}
      >
        <MdKeyboardBackspace size='30' /> Back to previous page
      </Button>
    </DefaultContainer>
  );
};

export default ItemDetail;
