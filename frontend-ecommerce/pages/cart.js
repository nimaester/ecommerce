import React from "react";
import Image from "next/image";
import { Container, Text, Box, Button } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useGlobalContext } from "../lib/storeContext";
import { useRouter } from "next/router";
import CartItem from "../components/CartItem.js";
import emptyCartImage from "../assets/empty_cart.jpg";

const Cart = () => {
  const { cart } = useGlobalContext();
  const router = useRouter();

  const emptyCart = () => {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Image src={emptyCartImage} h='auto' w='auto' alt='empty_cart' />
      </Box>
    );
  };

  const showCartItems = () => {
    return (
      <Box>
        {cart.length &&
          cart.map((cartItem) => (
            <CartItem key={cartItem.slug} cartItem={cartItem} />
          ))}
      </Box>
    );
  };

  const calculatePrice = () => {
    return cart
      .reduce((val, cart) => {
        return val + cart.price * cart.count;
      }, 0)
      .toFixed(2);
  };

  return (
    <Container maxW='container.xl'>
      <Text textAlign='center' fontSize='4xl' p='4rem 0rem'>
        Shopping Cart
      </Text>

      {cart.length > 0 ? showCartItems() : emptyCart()}
      <Text p='2rem' textAlign='right'>
        {cart.length > 0 ? `Total: $${calculatePrice()}` : null}
      </Text>

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
          <MdKeyboardBackspace size='30' /> Continue shopping
        </Button>
      </Box>
    </Container>
  );
};
export default Cart;
