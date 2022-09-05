import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { ContinueShoppingButton } from "../elements/Buttons";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <Box>
      <Flex
        mb='5rem'
        h='50vh'
        flexDir='column'
        justifyContent='end'
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
      <ContinueShoppingButton onClick={() => router.push("/")} />
    </Box>
  );
};

export default Success;
