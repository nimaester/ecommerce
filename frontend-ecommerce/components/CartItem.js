import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../lib/storeContext";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdTennisball } from "react-icons/io";

const CartItem = ({ cartItem }) => {
  const { cart, setCart } = useGlobalContext();

  const removeItem = (item) => {
    const newCartItems = cart.filter((cartItem) => {
      return cartItem.slug === item ? false : true;
    });
    setCart(newCartItems);
  };

  // fix this shit
  const updateItemQuantity = (itemName, type) => {
    let newCart = cart.map((item) => {
      if (item.name === itemName) {
        if (type === "add" && item.count < item.limit)
          return { ...item, ...(item.count = item.count + 1) };
        else if (type === "minus" && item.count > 0) {
          return { ...item, ...(item.count = item.count - 1) };
        } else {
          null;
        }
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  return (
    <Box p='0rem 2rem'>
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
          <Box display='flex' alignItems='center'>
            <Button
              onClick={() => updateItemQuantity(cartItem.name, "minus")}
              padding='0rem'
              backgroundColor='transparent'
            >
              <AiOutlineMinus size='20px' />
            </Button>

            <Text p='10px'>{cartItem.count}</Text>
            <Button
              padding='0rem'
              backgroundColor='transparent'
              onClick={() => updateItemQuantity(cartItem.name, "add")}
            >
              <AiOutlinePlus size='20px' />
            </Button>
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
