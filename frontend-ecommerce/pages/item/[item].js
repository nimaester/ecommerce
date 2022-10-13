import React, { useState } from "react";
import {
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
import { IoIosCloseCircle } from "react-icons/io";
import {
  ButtonDefault,
  DisabledButton,
  ContinueShoppingButton,
} from "../../elements/Buttons";
import { ItemNameText } from "../../elements/Text";
import { DefaultContainer } from "../../elements/Container";
import { useGlobalContext } from "../../lib/storeContext";
import { Loading } from "../../elements/Loading";
import { FailedToFetch } from "../../elements/FailedToFetch";
import { motion } from "framer-motion";
import useScrollBlock from "../../lib/customHooks/useScrollBlock";
import Carousel from "../../components/Helpers/Carousel";

const ItemDetail = () => {
  const toast = useToast();
  const id = "test-toast";
  const { cart, setCart, setCartSlider, preview, setPreview, zoom, setZoom } =
    useGlobalContext();
  const [numOfItem, setNumOfItem] = useState(1);
  const { query } = useRouter();
  const router = useRouter();

  // disable scrolling when on zoon mode
  const [blockScroll, allowScroll] = useScrollBlock();

  // fetch item data from graphql api
  const [result] = useQuery({
    query: GET_ITEM_INFO,
    variables: { slug: query.item },
  });
  const { data, fetching, error } = result;
  if (fetching) return <Loading />;
  if (error) return <FailedToFetch />;

  const itemData = data.inventories.data[0].attributes;
  const { title, description, price, slug, count } = itemData;

  const itemInCart = () => {
    return {
      name: title,
      description: description,
      price: price,
      slug: slug,
      image: itemData.images.data[0].attributes.formats.thumbnail.url,
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

  const multipleImg = () => {
    return (
      <Flex pt='3rem' gap='1rem' justifyContent='center' w='80%'>
        {itemData.images.data.map((img, i) => (
          <Flex
            onMouseEnter={() => setPreview(img.attributes.formats.medium.url)}
            onClick={() => setPreview(img.attributes.formats.medium.url)}
            _hover={{ cursor: "pointer" }}
            key={i}
            boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            borderRadius='5px'
            p='0.5rem'
          >
            <Image
              objectFit='contain'
              w='50px'
              src={img.attributes.formats.thumbnail.url}
              alt={title}
            />
          </Flex>
        ))}
      </Flex>
    );
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
        position='fixed'
        zIndex='100'
        top='0'
        left='0'
        w='100%'
        h='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        backgroundColor='white'
      >
        <Image
          maxH='90vh'
          maxW='80vw'
          objectFit='fill'
          src={
            preview === null
              ? itemData.images.data[0].attributes.formats.medium.url
              : preview
          }
          alt={slug}
        />

        <Button
          backgroundColor='transparent'
          onClick={() => setZoom(false)}
          position='fixed'
          right='0'
          top='0'
          style={{ WebkitTapHighlightColor: "transparent" }}
          _hover={{ outline: "none" }}
          mt='1.5rem'
        >
          <IoIosCloseCircle size='40' />
        </Button>
      </Box>
    );
  };

  const returnToShopping = () => {
    router.push("/shop");
    setCartSlider(false);
  };

  return (
    <DefaultContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      mt='3rem'
    >
      {zoom ? blockScroll() : allowScroll()}
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
            flexDir='column'
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
              src={
                preview !== null
                  ? preview
                  : itemData.images.data[0].attributes.formats.medium.url
              }
              alt={slug}
              onClick={() => setZoom(true)}
              objectFit='contain'
              w={{
                sm: "300px",
                md: "350px",
                base: "250px",
              }}
              h={{
                sm: "300px",
                md: "350px",
                base: "200px",
              }}
              maxW='450px'
            />
            {itemData.images.data.length > 1 && multipleImg()}
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
              {count > 0 && (
                <Select
                  onChange={(e) => setNumOfItem(e.target.value)}
                  maxW='80px'
                  p='0rem'
                >
                  {showNumberOfItems(count)}
                </Select>
              )}
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
      <Carousel title={"Similar Items"} />
      <ContinueShoppingButton onClick={() => returnToShopping()} />
    </DefaultContainer>
  );
};

export default ItemDetail;
