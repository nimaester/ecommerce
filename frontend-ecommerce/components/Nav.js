import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";
import { NavLinkText } from "../elements/Text";

const Nav = () => {
  const { cart, cartSlider, setCartSlider } = useGlobalContext();
  const countCartItems = () => {
    let itemCount = 0;
    cart.forEach((item) => (itemCount += item.count));
    return itemCount;
  };

  return (
    <Box backgroundColor='brand.200' position='sticky' top='0' zIndex='5'>
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
          <Link href={"/"}>
            <NavLinkText
              cursor='pointer'
              justifyContent='center'
              onClick={() => setCartSlider(false)}
              alignItems='center'
            >
              <AiOutlineHome size='30' />
              <Text>Home</Text>
            </NavLinkText>
          </Link>
          <NavLinkText cursor='pointer' alignItems='center'>
            <FaExclamation size='25' />
            <Text>What's New</Text>
          </NavLinkText>
          <NavLinkText alignItems='center' cursor='pointer'>
            <FiLogIn size='30' />
            <Text>Login</Text>
          </NavLinkText>

          <NavLinkText
            alignItems='center'
            cursor='pointer'
            onClick={() => setCartSlider(!cartSlider)}
          >
            <RiShoppingCart2Line size='30' />

            <Text>{countCartItems()}</Text>
          </NavLinkText>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
