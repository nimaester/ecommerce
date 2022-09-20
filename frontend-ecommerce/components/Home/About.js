import React from "react";
import { Text, Image, Box, Flex } from "@chakra-ui/react";
import { DefaultContainer } from "../../elements/Container";

const About = () => {
  return (
    <DefaultContainer backgroundColor='brand.800'>
      <Box
        display={{
          sm: "block",
          md: "flex",
          lg: "flex",
          base: "block",
        }}
      >
        <Flex
          flexDir='column'
          justifyContent='center'
          flex='1'
          p={{
            sm: "0rem 0rem 5rem 0rem",
            md: "0rem 5rem 0rem 0rem",
            base: "0rem 0rem 5rem 0rem",
          }}
        >
          <Text fontSize='3xl'>Our goal...</Text>
          <Text
            fontSize={{
              sm: "1rem",
              md: "1.1rem",
              lg: "1.1rem",
              xl: "1.1rem",
              base: "0.9rem",
            }}
          >
            We're the best in our field, and it's all thanks to the incredible
            relationships we've formed with our clients. Unlike our competitors,
            we're invested in developing a personal connection with each and
            everyone of our customers, by providing quality service and being
            available to you 24/7. Get in touch with us when you're ready to
            learn more; we can't wait to meet you!
          </Text>
        </Flex>

        <Flex justifyContent='center' alignItems='center' flex='1'>
          <Image
            src='https://mbpics7528.s3.us-west-1.amazonaws.com/service.jpg'
            alt='customer_service'
          />
        </Flex>
      </Box>
    </DefaultContainer>
  );
};

export default About;
