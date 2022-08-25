import React from "react";
import { Container, Box, Flex, Text, Image, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";
import { CartSliderButton } from "../elements/Buttons";
import { motion, isValidMotionProp } from "framer-motion";

const CartSlider = () => {
  const { cartSlider, setCartSlider, cart } = useGlobalContext();

  const calculatePrice = (price, count) => {
    let total = cart
      .reduce((val, cart) => {
        return val + price * count;
      }, 0)
      .toFixed(2);

    //adds comma if thousands
    return String(total).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const emptySliderCart = () => {
    return (
      <Box
        as={motion.div}
        minH='40vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
      >
        <Image
          pb='5'
          src='https://mbpics7528.s3.us-west-1.amazonaws.com/empty-cart2.png'
          alt='empty_cart_image'
          opacity='0.7'
        />
        <Text>Your cart is empty!</Text>
      </Box>
    );
  };

  const sliderCart = () => {
    return cart.map((item) => (
      <Flex justifyContent='space-between' p='1rem 0rem' key={item.slug}>
        <Box minW='150px' flex='2'>
          <Image w='5rem' src={item.image} />
        </Box>
        <Box flex='5'>
          <Text fontSize='lg' fontWeight='bold'>
            {item.name}
          </Text>
          <Text as='span'>Qty: </Text>
          <Text fontWeight='medium' as='span' color='blue'>
            {item.count}
          </Text>
          <Text>$ {calculatePrice(item.price, item.count)}</Text>
        </Box>
      </Flex>
    ));
  };

  const emptySliderCartButtons = () => {
    return (
      <Flex
        p='2rem 3rem'
        borderTop='1px solid #E1E3E4'
        flex='0.5'
        justifyContent='center'
        backgroundColor='white'
      >
        <CartSliderButton onClick={() => setCartSlider(false)}>
          Continue Shopping
        </CartSliderButton>
      </Flex>
    );
  };

  const sliderCartButtons = () => {
    return (
      <Flex
        p='2rem 3rem'
        borderTop='1px solid #E1E3E4'
        flex='0.5'
        justifyContent='space-between'
        backgroundColor='white'
      >
        <Link href={"/cart"}>
          <CartSliderButton onClick={() => setCartSlider(false)}>
            Checkout
          </CartSliderButton>
        </Link>
        <CartSliderButton onClick={() => setCartSlider(false)}>
          Close Cart
        </CartSliderButton>
      </Flex>
    );
  };

  const SlidingMotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  });

  return (
    <SlidingMotionBox
      exit={{ y: "90%" }}
      initial={{ x: "90%" }}
      animate={{ x: "0%" }}
      transition={{
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      }}
      position='fixed'
      right='0'
      onClick={(e) => e.stopPropagation()}
    >
      <Box
        p='1rem 2.5rem'
        maxH='50vh'
        backgroundColor='white'
        flex='3'
        overflow='auto'
        minW='500px'
      >
        {cart.length > 0 ? sliderCart() : emptySliderCart()}
      </Box>
      {cart.length > 0 ? sliderCartButtons() : emptySliderCartButtons()}
    </SlidingMotionBox>
  );
};

export default CartSlider;
