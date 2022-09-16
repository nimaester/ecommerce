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
import Carousel from "../../components/Helpers/Carousel";

const ItemDetail = () => {
  const toast = useToast();
  const id = "test-toast";
  const { cart, setCart, setCartSlider } = useGlobalContext();
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
        position='fixed'
        zIndex='20'
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
          maxH='95vh'
          src={itemData.image.data.attributes.formats.medium.url}
          alt={slug}
        />

        <Button
          backgroundColor='transparent'
          onClick={() => setZoom(false)}
          position='fixed'
          right='0'
          top='0'
        >
          <IoIosCloseCircle size='30' />
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
      mt={{
        sm: "5rem",
        md: "10rem",
        lg: "10rem",
        xl: "10rem",
        base: "5rem",
      }}
    >
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
              onClick={() => setZoom(true)}
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
      <Carousel title={"Similar Items"} />
      <ContinueShoppingButton onClick={() => returnToShopping()} />
    </DefaultContainer>
  );
};

export default ItemDetail;
