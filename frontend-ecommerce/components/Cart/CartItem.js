import React from "react";
import { Box, Flex, Text, useToast, Image } from "@chakra-ui/react";
import { useGlobalContext } from "../../lib/storeContext";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartPlusMinusButton } from "../../elements/Buttons";

const CartItem = ({ cartItem }) => {
  const { cart, setCart } = useGlobalContext();
  const toast = useToast();
  const id = "test-toast";

  const removeItem = (item) => {
    const newCartItems = cart.filter((cartItem) => {
      return cartItem.slug === item ? false : true;
    });
    setCart(newCartItems);
  };

  const updateItemQuantity = (itemName, type) => {
    let newCart = cart
      .map((item) => {
        if (item.name === itemName) {
          if (type === "add") {
            if (item.count < item.limit) {
              return { ...item, ...(item.count += 1) };
            } else {
              if (!toast.isActive(id)) {
                toast({
                  id,
                  title: "Not enough inventory",
                  status: "error",
                  duration: 1000,
                });
              }
              return item;
            }
          } else if (type === "minus") {
            return { ...item, ...(item.count -= 1) };
          } else {
            return item;
          }
        } else {
          return item;
        }
      })
      .filter((item) => item.count !== 0);
    setCart(newCart);
  };

  return (
    <Box p='0rem'>
      <Flex p='2rem 0rem' justifyContent='space-between' h='100px'>
        <Link href={`item/${cartItem.slug}`}>
          <Box
            display={{
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              base: "none",
            }}
            alignItems='center'
          >
            <Image
              _hover={{ cursor: "pointer" }}
              maxW='70px'
              src={cartItem.image}
              alt={cartItem.slug}
            />
          </Box>
        </Link>

        <Flex alignItems='center' justifyContent='space-between'>
          <Link href={`item/${cartItem.slug}`}>
            <Text _hover={{ cursor: "pointer" }}>{cartItem.name}</Text>
          </Link>
        </Flex>

        <Flex w='200px' justifyContent='space-between'>
          <Box
            border='1px solid #E1E3E4'
            borderRadius='5px'
            display='flex'
            alignItems='center'
          >
            <CartPlusMinusButton
              onClick={() => updateItemQuantity(cartItem.name, "minus")}
            >
              <AiOutlineMinus size='20px' />
            </CartPlusMinusButton>

            <Text>{cartItem.count}</Text>
            <CartPlusMinusButton
              onClick={() => updateItemQuantity(cartItem.name, "add")}
            >
              <AiOutlinePlus size='20px' />
            </CartPlusMinusButton>
          </Box>
          <Flex flexDir='column' alignItems='end'>
            <Text>$ {cartItem.price}</Text>
            <Text
              color='red'
              _hover={{ cursor: "pointer" }}
              onClick={() => removeItem(cartItem.slug)}
            >
              remove
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <hr />
    </Box>
  );
};

export default CartItem;
