import React from "react";
import { Text, forwardRef, Flex } from "@chakra-ui/react";

export const ItemNameText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "4xl",
        md: "5xl",
        lg: "5xl",
        xl: "5xl",
        base: "4xl",
      }}
      pt='4'
      pb='4'
    ></Text>
  );
};

export const HeaderText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "4xl",
        md: "5xl",
        lg: "5xl",
        xl: "5xl",
        base: "3xl",
      }}
      pb='6'
      textAlign='center'
    ></Text>
  );
};

export const NavLinkText = forwardRef((props, ref) => (
  <Flex
    {...props}
    _hover={{ cursor: "pointer", color: "blue", transform: "scale(1.05)" }}
    alignItems='center'
    ref={ref}
  ></Flex>
));
