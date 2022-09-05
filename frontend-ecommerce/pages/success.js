import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Success = () => {
  return (
    <Box>
      <Box>
        <h1>Your order has been confirmed</h1>
        <h2>Thank you for your order</h2>

        <Box>
          <Text>Address</Text>
          <Text>'Address info'</Text>
        </Box>

        <Box>
          <h2>Items</h2>
          <Text>All the ordered items</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Success;
