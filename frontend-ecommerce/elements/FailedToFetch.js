import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const FailedToFetch = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minW='100%'
      minH='70vh'
      flexDir='column'
    >
      <Text color='red' fontSize='5xl'>
        404
      </Text>
      <Text>Page Not Found</Text>
    </Box>
  );
};
