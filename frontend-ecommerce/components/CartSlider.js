import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";
import { CartSliderButton } from "../elements/Buttons";
import { motion } from "framer-motion";

const CartSlider = () => {
  const { cartSlider, setCartSlider, cart } = useGlobalContext();

  const calculatePrice = (price, count) => {
    let total = cart
      .reduce((prev, val) => {
        return prev + val.price * val.count;
      }, 0)
      .toFixed(2);

    //adds comma if thousands
    return String(total).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const emptySliderCart = () => {
    return (
      <Box
        as={motion.div}
        display='flex'
        minH='200px'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        p='3rem'
      >
        <Image
          pb='5'
          src='https://mbpics7528.s3.us-west-1.amazonaws.com/empty-cart2.png'
          alt='empty_cart_image'
          opacity='0.4'
        />
        <Text>Your cart is empty!</Text>
      </Box>
    );
  };

  const sliderCart = () => {
    return cart.map((item, i) => (
      <Flex
        as={motion.div}
        m='1rem 0rem'
        key={item.slug}
        initial={{ opacity: 0, translateX: 100 }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: { duration: 0.2, delay: i * 0.2 },
        }}
        alignItems='center'
        maxW='300px'
        p='1rem'
      >
        <Box mr='3rem' p='10px' flex='1'>
          <Image src={item.image} alt={item.slug} />
        </Box>
        <Box flex='3'>
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
      <Flex justifyContent='center'>
        <CartSliderButton onClick={() => setCartSlider(false)}>
          Continue Shopping
        </CartSliderButton>
      </Flex>
    );
  };

  const sliderCartButtons = () => {
    return (
      <Flex justifyContent='space-around'>
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

  return (
    <Box
      minW='100%'
      minH='100vh'
      backgroundColor='rgba(0, 0, 0, .1)'
      onClick={() => setCartSlider(false)}
      position='fixed'
      zIndex='5'
      top='0'
      display={cartSlider ? "block" : "none"}
    >
      <Box
        as={motion.div}
        initial={{ x: "100%" }}
        animate={{ x: "0%", transition: { type: "tween", duration: 0.3 } }}
        position='fixed'
        right='10'
        top='150'
        onClick={(e) => e.stopPropagation()}
        zIndex='10'
        backgroundColor='white'
        borderRadius='10px'
        boxShadow='0 0 10px rgba(33,33,33,.9)'
        p='1rem'
        minW='450px'
      >
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          <Text textAlign='center' fontSize='2xl'>
            Cart Items
          </Text>

          <Box overflowY='auto' overflowX='hidden' maxH='350px'>
            {cart.length > 0 ? sliderCart() : emptySliderCart()}
          </Box>

          <Box
            borderTop='1px solid #E5E5E5'
            p='1.5rem 0rem 1rem 0rem'
            backgroundColor='white'
          >
            {cart.length > 0 ? sliderCartButtons() : emptySliderCartButtons()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartSlider;
