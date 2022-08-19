import React from "react";
import { Container, Button, Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";
import { CartSliderButton } from "../elements/Buttons";
import emptyCart from "../assets/empty-cart2.jpg";

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
        minH='40vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Your Cart is Empty</Text>
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

  return (
    <Container
      minW='100%'
      minH='100%'
      backgroundColor='rgba(0, 0, 0, .1)'
      onClick={() => setCartSlider(false)}
      position='fixed'
      display={cartSlider ? "block" : "none"}
      zIndex='10'
    >
      <Box position='fixed' right='0' onClick={(e) => e.stopPropagation()}>
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
      </Box>
    </Container>
  );
};

export default CartSlider;
