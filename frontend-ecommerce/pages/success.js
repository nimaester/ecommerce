import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { ReturnHomeButton } from "../elements/Buttons";
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
        h='70vh'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Image
          w='auto'
          src='https://mbpics7528.s3.us-west-1.amazonaws.com/thank_you.png'
          alt='thank_you_png'
        />
        <Flex>
          <Text fontWeight='bold' mr='1rem'>
            Order no:{" "}
          </Text>
          <Text> {order.payment_intent}</Text>
        </Flex>

        <Text>
          Thank you for your order {order.customer_details.name.split(" ")[0]}
        </Text>
      </Flex>
      <ReturnHomeButton mb='5rem' onClick={() => router.push("/")}>
        Back Home
      </ReturnHomeButton>
    </Box>
  );
};

export default Success;
