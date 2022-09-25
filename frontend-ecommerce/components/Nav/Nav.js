import React, { useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../../lib/storeContext";
import { NavLinkText } from "../../elements/Text";
import CartSlider from "../Cart/CartSlider";
import MiniNav from "./MiniNav";
import { useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import User from "../User/User";
import { useUser } from "@auth0/nextjs-auth0";

const Nav = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

  const router = useRouter();

  const { cart, cartSlider, setCartSlider, miniNavbar, setMiniNavbar } =
    useGlobalContext();

  const { user, error, isLoading } = useUser();
  console.log(user);

  const countCartItems = () => {
    let itemCount = 0;
    cart.forEach((item) => (itemCount += item.count));
    return itemCount > 0 ? itemCount : " ";
  };

  const closeSliderOnSmallScreenSize = () => {
    if (isSmallScreen) {
      setCartSlider(false);
    }
    if (!isSmallScreen) {
      setMiniNavbar(false);
    }
  };

  useEffect(() => {
    closeSliderOnSmallScreenSize();
  }, [isSmallScreen]);

  return (
    <Box
      backgroundColor='brand.900'
      transition='ease-in-out 0.3s'
      position={router.pathname === "/" ? "fixed" : "sticky"}
      w='100%'
      top='0'
      zIndex='90'
      color='#2B3636'
    >
      <Container
        p={{
          sm: "0.5rem 2rem",
          md: "0.5rem 3rem",
          base: "0.5rem 2rem",
        }}
        fontSize={{
          sm: "1rem",
          md: "1.5rem",
          base: "1rem",
        }}
        maxW='container.xl'
        userSelect='none'
      >
        <Flex justifyContent='space-between'>
          <Box display='flex' alignItems='center' flex='3'>
            <Link href={"/"}>
              <Image
                src='https://mbpics7528.s3.us-west-1.amazonaws.com/MBLogo.png'
                alt='marcias_boutique'
                w={{
                  sm: "80px",
                  md: "80px",
                  base: "60px",
                }}
                _hover={{ cursor: "pointer" }}
              />
            </Link>
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
            <Link href={"/shop"}>
              <NavLinkText>Shop</NavLinkText>
            </Link>

            <Flex>
              {user ? (
                <NavLinkText>
                  <Image
                    borderRadius='50%'
                    maxW='30px'
                    src={user.picture}
                    alt='user_pic'
                  />
                </NavLinkText>
              ) : (
                <User />
              )}
            </Flex>
            <NavLinkText
              position='relative'
              onClick={() => setCartSlider(!cartSlider)}
            >
              <RiShoppingCart2Line size='25' />

              <span style={{ marginTop: "-10px", color: "white" }}>
                {countCartItems()}
              </span>
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
            {miniNavbar ? (
              <GrClose
                backgroundColor='white'
                onClick={() => setMiniNavbar(!miniNavbar)}
                size='30'
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setMiniNavbar(!miniNavbar)}
                size='30'
              />
            )}
          </Flex>
        </Flex>
        {miniNavbar && <MiniNav />}
      </Container>

      {cartSlider && <CartSlider />}
    </Box>
  );
};

export default Nav;
