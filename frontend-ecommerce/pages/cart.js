import React from "react";
import { Container, Text, Box, Button } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useGlobalContext } from "../lib/storeContext";
import { useRouter } from "next/router";
import CartItem from "../components/CartItem.js";

const Cart = () => {
  const { cart } = useGlobalContext();
  const router = useRouter();

  return (
    <Container maxW='container.xl'>
      <Text textAlign='center' fontSize='4xl' p='4rem 0rem'>
        Shopping Cart
      </Text>
      {cart.length &&
        cart.map((cartItem) => (
          <CartItem key={cartItem.slug} cartItem={cartItem} />
        ))}
      <Text p='1rem' textAlign='right'>
        {"Total: $" + cart.length
          ? cart.reduce((prev, cart) => {
              return prev + Number(cart.price);
            }, 0)
          : "Your cart is empty!"}
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
