import { useRouter } from "next/router";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { DefaultContainer } from "../elements/Container";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    console.log(paymentIntents);
    return { props: { orders: paymentIntents.data } };
  },
});
const formatMoney = (amount) => {
  return (amount * 0.01).toFixed(2);
};

export default function Profile({ user, orders }) {
  const router = useRouter();
  // console.log(orders);

  return (
    user && (
      <DefaultContainer>
        <Flex justifyContent='space-between'>
          <Box>
            <Text fontWeight='bold'>{user.name}</Text>
            <Text>{user.email}</Text>
          </Box>
          <Button
            p={{
              sm: "1.5rem 1.3rem",
              md: "1.5rem 1.3rem",
              base: "1rem 0.9rem",
            }}
            backgroundColor='button.primary'
            color='#fff'
            _hover={{
              WebkitTransform: "translateY(-3px)",
              transform: "translateY(-3px)",
            }}
            _active={{ transform: "scale(1.05)" }}
            fontSize={{
              sm: "0.9rem",
              md: "1rem",
              lg: "1rem",
              xl: "1rem",
              base: "0.7rem",
            }}
            onClick={() => router.push("/api/auth/logout")}
          >
            Logout
          </Button>
        </Flex>

        <Box m='2rem 0rem'>
          {orders.map((order) => (
            <Flex
              boxShadow='rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
              justifyContent='space-between'
              alignItems='center'
              key={order.id}
              m={{
                sm: "2rem 0rem 0rem 0rem",
                lg: "2rem 5rem 0rem 5rem",
                base: "2rem 0rem 0rem 0rem",
              }}
              p={{
                sm: "2rem",
                base: "1.5rem",
              }}
              borderRadius='10px'
            >
              <Text>Order Number: {order.id}</Text>
              <Text>Total: $ {formatMoney(order.amount)}</Text>
            </Flex>
          ))}
        </Box>
      </DefaultContainer>
    )
  );
}
