import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";
import { NavLinkText, NavBrandText } from "../elements/Text";

const Nav = () => {
  const { cart, cartSlider, setCartSlider } = useGlobalContext();
  const countCartItems = () => {
    let itemCount = 0;
    cart.forEach((item) => (itemCount += item.count));
    return itemCount;
  };

  return (
    <Box
      backgroundColor='brand.700'
      position='sticky'
      top='0'
      zIndex='5'
      color='#2B3636'
    >
      <Container
        p={{
          sm: "2rem 2rem",
          md: "2rem 3rem",
          lg: "2rem 3rem",
          xl: "2rem 3rem",
          base: "2rem 1rem",
        }}
        fontSize={{
          sm: "1rem",
          md: "1.5rem",
          lg: "1.5rem",
          xl: "1.5rem",
          base: "1rem",
        }}
        maxW='container.xl'
      >
        <Flex justifyContent='space-between'>
          <Box flex='3'>
            <NavBrandText>Marcia's Boutique</NavBrandText>
          </Box>
          <Flex justifyContent='space-between' flex='2'>
            <Link href={"/"}>
              <NavLinkText onClick={() => setCartSlider(false)}>
                Home
              </NavLinkText>
            </Link>
            <NavLinkText>New Products</NavLinkText>
            <NavLinkText>Login</NavLinkText>

            <NavLinkText onClick={() => setCartSlider(!cartSlider)}>
              <RiShoppingCart2Line size='20' />
              {countCartItems()}
            </NavLinkText>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
