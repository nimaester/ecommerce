import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useGlobalContext } from "../../lib/storeContext";
import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MiniNav = () => {
  const { setMiniNavbar } = useGlobalContext();

  const handleNavClick = () => {
    setMiniNavbar(false);
  };

  const { user, error, isLoading } = useUser();
  const router = useRouter();

  return (
    <Flex
      as={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.3 } }}
      flexDir='column'
      alignItems='center'
      position='fixed'
      top={{ sm: "90px", base: "70px" }}
      left='0'
      w='100vw'
      h='100vh'
      gap='3rem'
      backgroundColor='brand.900'
      fontSize='1.7rem'
      overflowX='hidden'
      pt='6rem'
      zIndex='-10'
      userSelect='none'
      color='white'
    >
      <Link href='/'>
        <Text
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            color: "white",
          }}
          onClick={handleNavClick}
        >
          Home
        </Text>
      </Link>
      <Link href='/shop'>
        <Text
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            color: "white",
          }}
          onClick={handleNavClick}
        >
          Shop
        </Text>
      </Link>

      {user ? (
        <Text
          onClick={() => {
            router.push("/profile");
            handleNavClick();
          }}
          color='orange'
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            color: "white",
          }}
        >
          {user.nickname}
        </Text>
      ) : (
        <Text onClick={router.push("/api/auth/login")}>Login</Text>
      )}

      <Link href='/cart'>
        <Text
          _hover={{
            cursor: "pointer",
            transform: "scale(1.05)",
            color: "white",
          }}
          onClick={handleNavClick}
        >
          Cart
        </Text>
      </Link>
    </Flex>
  );
};

export default MiniNav;
