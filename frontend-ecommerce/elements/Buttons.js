import React from "react";
import { Button, forwardRef, Flex, Text, Link } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";

export const ButtonDefault = forwardRef((props, ref) => (
  <Button
    {...props}
    p='1.5rem 1.3rem'
    backgroundColor='button.primary'
    color='#fff'
    fontSize='1.2rem'
    _hover={{
      WebkitTransform: "translateY(-3px)",
      transform: "translateY(-3px)",
    }}
    _active={{ transform: "scale(1.05)" }}
    ref={ref}
  ></Button>
));

export const CartSliderButton = forwardRef((props, ref) => (
  <Button
    {...props}
    _hover={{
      WebkitTransform: "translateY(-3px)",
      transform: "translateY(-3px)",
    }}
    _active={{ transform: "scale(1.05)" }}
    ref={ref}
    backgroundColor='#2B3636'
    border='2px solid gray'
    color='white'
  ></Button>
));

export const DisabledButton = ({ children }) => {
  return (
    <Button
      {...children}
      disabled
      p='1.5rem 1.3rem'
      backgroundColor='red'
      color='#fff'
      fontSize='1.2rem'
      _hover={{ pointerEvents: "none" }}
      _active={{ pointerEvents: "none" }}
    >
      Sold Out
    </Button>
  );
};

export const CartPlusMinusButton = ({ ...children }) => {
  return (
    <Button
      {...children}
      _hover={{ textDecoration: "none" }}
      padding='0'
      backgroundColor='transparent'
    ></Button>
  );
};

export const ContinueShoppingButton = forwardRef((props, ref) => (
  <Flex alignItems='center' justifyContent='center'>
    <Button
      {...props}
      ref={ref}
      backgroundColor='transparent'
      mt='5rem'
      _hover={{
        color: "blue",
        WebkitTransform: "translateY(-3px)",
        transform: "translateY(-3px)",
        textDecoration: "none",
      }}
      _active={{ transform: "scale(1.05)" }}
    >
      <MdKeyboardBackspace size='30' />
      <Text>Continue Shopping</Text>
    </Button>
  </Flex>
));

export const ReturnHomeButton = forwardRef((props, ref) => (
  <Flex alignItems='center' justifyContent='center'>
    <Button
      {...props}
      ref={ref}
      backgroundColor='transparent'
      mt='5rem'
      _hover={{
        color: "blue",
        WebkitTransform: "translateY(-3px)",
        transform: "translateY(-3px)",
        textDecoration: "none",
      }}
      _active={{ transform: "scale(1.05)" }}
    >
      <MdKeyboardBackspace size='30' />
      <Text>Return to home</Text>
    </Button>
  </Flex>
));
