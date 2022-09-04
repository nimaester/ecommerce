import React, { useState, useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../lib/storeContext";
import { NavLinkText } from "../elements/Text";
import CartSlider from "./CartSlider";
import { useMediaQuery } from "@chakra-ui/react";

const Nav = () => {
  const [smallScreenSize, setSmallScreenSize] = useState(false);
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  const { cart, cartSlider, setCartSlider } = useGlobalContext();

  const countCartItems = () => {
    let itemCount = 0;
    cart.forEach((item) => (itemCount += item.count));
    return itemCount > 0 ? itemCount : " ";
  };

  const closeSliderOnSmallScreenSize = () => {
    if (isSmallScreen) setCartSlider(false);
  };

  useEffect(() => {
    closeSliderOnSmallScreenSize();
  }, [isSmallScreen]);

  return (
    <Box
      backgroundColor='brand.900'
      position='sticky'
      top='0'
      zIndex='5'
      color='#2B3636'
    >
      <Container
        p={{
          sm: "1rem",
          md: "1rem 3rem",
          lg: "1rem 3rem",
          xl: "1rem 3rem",
          base: "1rem",
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
          <Box display='flex' alignItems='center' flex='3'>
            <Link href={"/"}>
              <Image
                src='https://mbpics7528.s3.us-west-1.amazonaws.com/logoColor.png'
                alt='marcias_boutique'
                w='50px'
                _hover={{ cursor: "pointer" }}
              />
            </Link>

            <Text
              ml='10px'
              fontStyle='italic'
              fontWeight='bold'
              color='brand.200'
              fontSize='1rem'
            >
              Marcia's Boutique
            </Text>
          </Box>
          <Flex
            justifyContent='space-between'
            flex='2'
            alignItems='center'
            display={isSmallScreen ? "none" : "flex"}
          >
            <Link href={"/"}>
              <NavLinkText onClick={() => setCartSlider(false)}>
                Home
              </NavLinkText>
            </Link>
            <NavLinkText>Shop</NavLinkText>
            <NavLinkText>
              <FaRegUser size='22' />
            </NavLinkText>
            <NavLinkText onClick={() => setCartSlider(!cartSlider)}>
              <RiShoppingCart2Line size='25' />
              {countCartItems()}
            </NavLinkText>
          </Flex>
          <Flex
            alignItems='center'
            color='white'
            _hover={{
              transform: "scale(1.05)",
              color: "black",
              cursor: "pointer",
            }}
            display={isSmallScreen ? "flex" : "none"}
          >
            <GiHamburgerMenu size='35' />
          </Flex>
        </Flex>
      </Container>

      {cartSlider && <CartSlider />}
    </Box>
  );
};

export default Nav;
