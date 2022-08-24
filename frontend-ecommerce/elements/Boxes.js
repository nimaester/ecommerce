import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const FixedBox = ({ ...children }) => {
  return (
    <Box
      as={motion.div}
      {...children}
      zIndex='2'
      position='absolute'
      top='50%'
      left='50%'
      style={{
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
      }}
      whileHover={{
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(33,33,33,.9)",
      }}
      h='100%'
      w='100%'
      borderRadius='5px'
    ></Box>
  );
};
