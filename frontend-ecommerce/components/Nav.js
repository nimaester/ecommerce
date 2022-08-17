import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";

const Nav = () => {
  const { cart, cartSlider, setCartSlider } = useGlobalContext();
  const countCartItems = () => {
    let itemCount = 0;
    cart.forEach((item) => (itemCount += item.count));
    return itemCount;
  };

  return (
    <Box backgroundColor='brand.800' position='sticky' top='0' zIndex='5'>
      <Container maxW='container.xl' p='5'>
        <Flex pr='2' pl='2' justifyContent='space-between'>
          <Link href={"/"}>
            <Flex
              alignItems='center'
              cursor='pointer'
              onClick={() => setCartSlider(false)}
            >
              <AiOutlineHome size='30' />
              <Text fontSize='1.2rem'>Home</Text>
            </Flex>
          </Link>
          <Flex cursor='pointer'>
            <FaExclamation size='25' />
            <Text fontSize='1.2rem'>What's New</Text>
          </Flex>
          <Flex alignItems='center' cursor='pointer'>
            <FiLogIn size='30' />
            <Text fontSize='1.2rem'>Login</Text>
          </Flex>

          <Flex
            alignItems='center'
            cursor='pointer'
            onClick={() => setCartSlider(!cartSlider)}
          >
            <RiShoppingCart2Line size='30' />

            <Text ml='-0.1rem' zIndex='5' fontSize='1.2rem'>
              {countCartItems()}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
