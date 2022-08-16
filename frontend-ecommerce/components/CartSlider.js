import React from "react";
import { Container, Button, Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";

const CartSlider = () => {
  const { cartSlider, setCartSlider, cart } = useGlobalContext();

  return (
    <Container
      minW='100%'
      minH='100%'
      backgroundColor='rgba(0, 0, 0, .2)'
      onClick={() => setCartSlider(false)}
      position='fixed'
      display={cartSlider ? "block" : "none"}
      zIndex='10'
    >
      <Box position='absolute' right='0' onClick={(e) => e.stopPropagation()}>
        <Box
          p='1rem 2.5rem'
          maxH='60vh'
          backgroundColor='white'
          flex='3'
          overflow='auto'
          minW='600px'
        >
          {cartSlider &&
            cart.map((item) => (
              <Flex
                justifyContent='space-between'
                p='1rem 0rem'
                key={item.slug}
              >
                <Box minW='150px' flex='2'>
                  <Image w='5rem' src={item.image} />
                </Box>
                <Box flex='5'>
                  <Text>{item.name}</Text>
                  <Text>{item.count}</Text>
                  <Text>${item.price}</Text>
                </Box>
              </Flex>
            ))}
        </Box>

        <Flex
          p='2rem 3rem'
          borderTop='1px solid #E1E3E4'
          flex='0.5'
          justifyContent='space-between'
          backgroundColor='white'
        >
          <Link href={"/cart"}>
            <Button onClick={() => setCartSlider(false)}>Checkout</Button>
          </Link>
          <Button onClick={() => setCartSlider(false)}>Close Cart</Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default CartSlider;
