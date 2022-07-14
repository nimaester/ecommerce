import React from "react";
import { Box } from "@chakra-ui/react";

export const FixedBox = ({ ...children }) => {
  return (
    <Box
      {...children}
      zIndex='2'
      position='absolute'
      top='50%'
      left='50%'
      style={{
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
      }}
      _hover={{
        cursor: "pointer",
        boxShadow: "0 0 11px rgba(33,33,33,.9)",
      }}
      h='100%'
      w='100%'
      borderRadius='10px'
    ></Box>
  );
};
