import React from "react";
import { Button } from "@chakra-ui/react";

export const ButtonDefault = ({ ...children }) => {
  return (
    <Button
      {...children}
      p='1.5rem 1.3rem'
      backgroundColor='#332cf2'
      color='#fff'
      fontSize='1.2rem'
      _hover={{
        WebkitTransform: "translateY(-3px)",
        transform: "translateY(-3px)",
      }}
      _active={{ transform: "scale(1.05)" }}
    ></Button>
  );
};
