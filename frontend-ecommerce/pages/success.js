import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = async (params) => {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
};

const Success = ({ order }) => {
  console.log(order);
  return (
    <Box>
      <Flex
        h='80vh'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Image
          w='auto'
          src='https://mbpics7528.s3.us-west-1.amazonaws.com/thank_you.png'
          alt='thank_you_png'
        />
        <Text>
          {`Please visit us again ${
            order.customer_details.name.split(" ")[0]
          }!`}
        </Text>
        <Text>We look forward your next visit.</Text>
      </Flex>
    </Box>
  );
};

export default Success;
