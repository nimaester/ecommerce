import React from "react";
import { Text, Box, Button, Image } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useGlobalContext } from "../lib/storeContext";
import { useRouter } from "next/router";
import CartItem from "../components/CartItem.js";
import { DefaultContainer } from "../elements/Container";
import { HeaderText } from "../elements/Text";

const Cart = () => {
  const { cart } = useGlobalContext();
  const router = useRouter();

  const emptyCart = () => {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Image
          src='https://mbpics7528.s3.us-west-1.amazonaws.com/empty_cart.png'
          alt='empty_cart'
        />
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
    let total = cart
      .reduce((val, cart) => {
        return val + cart.price * cart.count;
      }, 0)
      .toFixed(2);

    //adds comma if thousands
    return String(total).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <DefaultContainer maxW='container.xl'>
      <HeaderText textAlign='center' pb='4rem' fontSize='4xl'>
        Shopping Cart
      </HeaderText>

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
    </DefaultContainer>
  );
};
export default Cart;
