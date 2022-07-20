import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { useGlobalContext } from "../lib/storeContext";
import CartItem from "../components/CartItem.js";

const Cart = () => {
  const { cart } = useGlobalContext();

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
    </Container>
  );
};
export default Cart;
