import React from "react";
import { Text } from "@chakra-ui/react";

export const ItemNameText = ({ ...children }) => {
  return (
    <Text
      {...children}
      fontSize={{
        sm: "4xl",
        md: "5xl",
        lg: "6xl",
        xl: "6xl",
        base: "4xl",
      }}
      pt='4'
      pb='4'
    ></Text>
  );
};
