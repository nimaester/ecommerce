import React from "react";
import { Text } from "@chakra-ui/react";

export const ItemNameText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "3xl",
        md: "4xl",
        lg: "4xl",
        xl: "4xl",
        base: "3xl",
      }}
      pt='4'
      pb='4'
    ></Text>
  );
};
