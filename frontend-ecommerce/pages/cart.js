import React from "react";
import { Text, Box, Flex, Image } from "@chakra-ui/react";
import { useGlobalContext } from "../lib/storeContext";
import { useRouter } from "next/router";
import CartItem from "../components/Cart/CartItem.js";
import { DefaultContainer } from "../elements/Container";
import { HeaderText } from "../elements/Text";
import { ContinueShoppingButton, ButtonDefault } from "../elements/Buttons";
import getStripe from "../lib/getStripe";
import { useUser } from "@auth0/nextjs-auth0";

const Cart = () => {
  const { cart } = useGlobalContext();
  const router = useRouter();

  const { user, error, isLoading } = useUser();

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

  const handlePurchaseButton = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    const data = await response.json();
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  const checkUser = () => {
    if (!user) {
      router.push("/api/auth/login");
    } else {
      handlePurchaseButton();
    }
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
    <DefaultContainer minH='550px'>
      <HeaderText textAlign='center' pb='5rem' fontSize='4xl'>
        Shopping Cart
      </HeaderText>

      {cart.length > 0 ? showCartItems() : emptyCart()}

      <Text p='2rem' textAlign='right'>
        {cart.length > 0 ? `Subtotal: $${calculatePrice()}` : null}
      </Text>
      <Flex justifyContent='center'>
        {cart.length > 0 && (
          <ButtonDefault onClick={checkUser} border='1px solid black' w='280px'>
            Proceed To Payment
          </ButtonDefault>
        )}
      </Flex>

      <ContinueShoppingButton onClick={() => router.push("/shop")} />
    </DefaultContainer>
  );
};
export default Cart;
