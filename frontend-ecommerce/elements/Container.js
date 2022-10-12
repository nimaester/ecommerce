import React from "react";
import { Container } from "@chakra-ui/react";

export const DefaultContainer = ({ ...children }) => {
  return (
    <Container
      {...children}
      maxW='container.xl'
      p={{
        sm: "3rem 2rem",
        md: "4rem 3rem",
        lg: "4rem 3rem",
        xl: "4rem 3rem",
        base: "3rem 1rem",
      }}
      fontSize={{
        sm: "0.9rem",
        md: "1.1rem",

        base: "1rem",
      }}
    ></Container>
  );
};
